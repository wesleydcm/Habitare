import { notification } from "antd";
import { createContext, useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import initialAchievements from "../../utils/initialAchievements";
export const AchievementContext = createContext([]);

export const AchievementProvider = ({ children }) => {
  const [achievements, setAchievements] = useState(
    JSON.parse(localStorage.getItem("@Habitare:Achievements")) ||
      initialAchievements
  );

  const completeAchievement = (achievementsId) => {
    let InitialState = achievements;
    achievementsId.forEach((achievementId) => {
      const newAchievements = InitialState.filter((achievement) => {
        return achievement.id !== achievementId;
      });
      const updateAchiviement = InitialState.filter((achievement) => {
        return achievement.id === achievementId;
      });
      if (!updateAchiviement[0].achieved) {
        const data = {
          id: updateAchiviement[0].id,
          title: updateAchiviement[0].title,
          notification: updateAchiviement[0].notification,
          description: updateAchiviement[0].description,
          achieved: true,
          secret: false,
          image: updateAchiviement[0].image,
        };
        InitialState = [...newAchievements, data];
        localStorage.setItem(
          "@Habitare:Achievements",
          JSON.stringify([...newAchievements, data])
        );
        notification.open({
          message: "Insígnia desbloqueada!",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--yellow)",
            WebkitBorderRadius: 14,
          },
          description: data.notification,
          icon: <img style={{ width: "50px" }} src={data.image} alt=""></img>,
        });
      }
    });
    setAchievements(InitialState);
  };

  return (
    <AchievementContext.Provider value={{ achievements, completeAchievement }}>
      {children}
    </AchievementContext.Provider>
  );
};

export const useAchievement = () => useContext(AchievementContext);

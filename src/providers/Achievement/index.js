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
  const [level, setLevel] = useState(
    JSON.parse(localStorage.getItem("@Habitare:Level")) || 0
  );

  const completeAchievement = (achievementsId) => {
    localStorage.setItem(
      "@Habitare:Level",
      JSON.stringify(level + achievementsId.length)
    );

    setLevel(level + achievementsId.length);
    console.log("setLevel", level);
    console.log("ach", achievementsId.length);
    let InitialState = achievements;
    achievementsId.forEach((achievementId) => {
      const newAchievements = InitialState.filter((achievement) => {
        return achievement.id !== achievementId;
      });
      const updateAchiviement = InitialState.filter((achievement) => {
        return achievement.id === achievementId;
      });
      if (!updateAchiviement[0].achieved) {
        console.log("oi");
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
          duration: 8,
          icon: (
            <img
              style={{
                width: "50px",

                position: "relative",
                right: "13px",
              }}
              src={data.image}
              alt=""
            ></img>
          ),
        });
      }
    });

    setAchievements(InitialState);
  };

  return (
    <AchievementContext.Provider
      value={{ achievements, completeAchievement, level }}
    >
      {children}
    </AchievementContext.Provider>
  );
};

export const useAchievement = () => useContext(AchievementContext);

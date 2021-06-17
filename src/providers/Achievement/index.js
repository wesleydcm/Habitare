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
    let InitialState = achievements;

    for (let i = achievements.length; i < initialAchievements.length; i++) {
      InitialState.push(initialAchievements[i]);
      console.log(InitialState);
    }

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

    const achievementsCompleted = InitialState.filter(
      (achievement) => achievement.achieved === true
    );

    localStorage.setItem(
      "@Habitare:Level",
      JSON.stringify(achievementsCompleted.length)
    );

    setLevel(achievementsCompleted.length);
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

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

  const completeAchievement = (achievementId) => {
    const newAchievements = achievements.filter((achievement) => {
      return achievement.id !== achievementId;
    });
    const updateAchiviement = achievements.filter((achievement) => {
      return achievement.id === achievementId;
    });
    const data = {
      id: updateAchiviement[0].id,
      title: updateAchiviement[0].title,
      notification: updateAchiviement[0].notification,
      description: updateAchiviement[0].description,
      achieved: true,
      secret: false,
      image: updateAchiviement[0].image,
    };
    setAchievements([...newAchievements, data]);
    localStorage.setItem("@Habitare:Achievements", achievements);
    notification.open({
      message: "Insígnia desbloqueada!",
      closeIcon: <FaTimes />,
      style: {
        fontFamily: "Raleway",
        backgroundColor: "var(--gray)",
        WebkitBorderRadius: 14,
      },
      description: data.notification,
      icon: `../../assets/images/insignias/${data.icon}`,
    });
  };

  return (
    <AchievementContext.Provider value={{ achievements, completeAchievement }}>
      {children}
    </AchievementContext.Provider>
  );
};

export const useAchievement = () => useContext(AchievementContext);

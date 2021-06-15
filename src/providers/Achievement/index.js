import { createContext, useState, useContext } from "react";
import { notification } from "antd";
import { FaTimes } from "react-icons/fa";
import initialAchievements from "../../utils/initialAchievements";
export const AchievementContext = createContext([]);

const initialState =
  localStorage.getItem("@Habitare:Achievements") || initialAchievements;

export const AchievementProvider = ({ children }) => {
  const [achievements, setAchievements] = useState(initialState);

  const completeAchievement = (id) => {
    const newAchievements = achievements.filter((achievement) => {
      return achievement.id !== id;
    });
    const updateAchiviement = achievements.filter((achievement) => {
      return achievement.id === id;
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
    // notification.open({
    //   message: "Insígnia desbloqueada!",
    //   closeIcon: <FaTimes />,
    //   style: {
    //     fontFamily: "Raleway",
    //     backgroundColor: "var(--gray)",
    //     WebkitBorderRadius: 14,
    //   },
    //   description: data.notification,
    //   icon: `../../assets/images/insignias/${data.icon}`,
    // });
  };

  return (
    <AchievementContext.Provider value={{ achievements, completeAchievement }}>
      {children}
    </AchievementContext.Provider>
  );
};

export const useAchievement = () => useContext(AchievementContext);

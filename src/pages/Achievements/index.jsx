import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../providers/User";
import { DashboardContainer, ImageMainCard } from "../Dashboard/styles";
import { MainCardAchievements, AchievementsContainer } from "./styles";
import trophy from "../../assets/images/trophy.svg";
import InsigniaCard from "../../components/InsigniaCard";
import {
  AchievementContext,
  useAchievement,
} from "../../providers/Achievement";

const Achievements = () => {
  const { authenticated } = useContext(UserContext);
  const { achievements } = useContext(AchievementContext);
  const achievementsDone = achievements.filter((achievement) => {
    return achievement.achieved;
  });
  const achievementsUndone = achievements.filter((achievement) => {
    return !achievement.achieved && !achievement.secret;
  });
  const achievementsSecret = achievements.filter((achievement) => {
    return achievement.secret;
  });

  const { completeAchievement } = useAchievement();

  const [firstKey, setFirstKey] = useState(false);
  const [secondKey, setSecondKey] = useState(false);

  const unlockSecondKey = (event) => {
    if (event.key === "2" && secondKey) {
      completeAchievement(["1"]);
      completeAchievement(["2"]);
      window.removeEventListener("keyup", unlockSecondKey, false);
    }
  };

  const unlockFirtKey = (event) => {
    if (event.key === "1" && firstKey) {
      setSecondKey(true);
      window.removeEventListener("keyup", unlockFirtKey, false);
    }
  };

  const unlockKey = (event) => {
    if (event.key === "f") {
      setFirstKey(true);
      window.removeEventListener("keyup", unlockKey, false);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", unlockKey);
    window.addEventListener("keyup", unlockFirtKey);
    window.addEventListener("keyup", unlockSecondKey);
  });

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <DashboardContainer>
      <MainCardAchievements>
        <h1>Conquistas alcançadas: {achievementsDone.length}</h1>
        <h3>
          Conquistas restantes:{" "}
          {achievementsUndone.length + achievementsSecret.length}
        </h3>
        <ImageMainCard>
          <img src={trophy} alt="trophy"></img>
        </ImageMainCard>
      </MainCardAchievements>

      <AchievementsContainer>
        {achievementsDone.map((achievement) => {
          return (
            <InsigniaCard
              title={achievement.title}
              description={achievement.description}
              image={achievement.image}
              achieved={achievement.achieved}
              key={achievement.id}
            ></InsigniaCard>
          );
        })}
        {achievementsUndone.map((achievement) => {
          return (
            <InsigniaCard
              title={achievement.title}
              description={achievement.description}
              image={achievement.image}
              achieved={achievement.achieved}
              key={achievement.id}
            ></InsigniaCard>
          );
        })}
      </AchievementsContainer>
    </DashboardContainer>
  );
};

export default Achievements;

import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../providers/User";
import { DashboardContainer, ImageMainCard } from "../Dashboard/styles";
import { MainCardAchievements, AchievementsContainer } from "./styles";
import trophy from "../../assets/images/trophy.svg";
import InsigniaCard from "../../components/InsigniaCard";
import { AchievementContext } from "../../providers/Achievement";

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

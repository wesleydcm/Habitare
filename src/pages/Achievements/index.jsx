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

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <DashboardContainer>
      <MainCardAchievements>
        <h1>Conquistas alcançadas: 9</h1>
        <h3>Conquistas restantes: 5</h3>
        <ImageMainCard>
          <img src={trophy} alt="trophy"></img>
        </ImageMainCard>
      </MainCardAchievements>

      <AchievementsContainer>
        {achievements.map((achievement) => {
          console.log(achievement);
          return (
            <InsigniaCard
              title={achievement.title}
              description={achievement.description}
              image={achievement.image}
              achieved={achievement.achieved}
            ></InsigniaCard>
          );
        })}
      </AchievementsContainer>
    </DashboardContainer>
  );
};

export default Achievements;

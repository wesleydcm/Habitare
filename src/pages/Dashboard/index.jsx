import NewHabit from "../../components/NewHabit";
import Aside from "../../components/Aside";
import Lottie from "react-lottie";

import animationData from "../../assets/lotties/main.json";

import {
  CardsList,
  DashboardContainer,
  ImageMainCard,
  MainCard,
} from "./styles";
import HabitCard from "../../components/HabitCard";

const MOCK_HABIT = [
  {
    title: "Desconecte-se do celular",
    category: "night",
    difficulty: "3",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 27,
  },
  {
    title: "Beber 2l de água por dia",
    category: "fit",
    difficulty: "1",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 65,
  },
  {
    title: "Aprender algo novo",
    category: "focus",
    difficulty: "2",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 42,
  },
  {
    title: "Pagar contas",
    category: "money",
    difficulty: "2",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 45,
  },
  {
    title: "Arrumar a cama",
    category: "house",
    difficulty: "1",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 85,
  },
  {
    title: "Praticar a gratidão",
    category: "spirit",
    difficulty: "2",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 15,
  },
];

const Dashboard = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Aside />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <NewHabit />
      </div>
      <DashboardContainer>
        <MainCard>
          <h1>Olá, Kenzie Academy!</h1>
          <h3>Qual hábito quer começar hoje?</h3>
          <ImageMainCard>
            <Lottie options={lottieOptions} />
          </ImageMainCard>
        </MainCard>
        <CardsList>
          {MOCK_HABIT.map((habit, index) => (
            <HabitCard habit={habit} key={index} />
          ))}
        </CardsList>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

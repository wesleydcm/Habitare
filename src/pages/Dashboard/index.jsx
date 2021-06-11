import NewHabit from "../../components/NewHabit";
import Aside from "../../components/Aside";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/main.json";
import FilterCategory from "../../components/Filter";
import { useState, useEffect } from "react";
import { useHabit } from "../../providers/Habit";

import {
  CardsList,
  DashboardContainer,
  FiltersAndButtonsWrapper,
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

  const { habits, loadHabits } = useHabit();
  const [myHabits, setMyHabits] = useState(habits);
  const [allHabits, setAllHabits] = useState(true);

  useEffect(() => {
    loadHabits();
    console.log(myHabits);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMyHabits(habits);
  }, [habits]);

  const handleFilter = (category) => {
    console.log(category);
    if (category === "displayAll") {
      setAllHabits(true);
    } else if (myHabits) {
      const filteredHabits = habits.filter(
        (habit) => habit.category === category
      );
      setMyHabits(filteredHabits);
      setAllHabits(false);
    }
  };

  return (
    <>
      <Aside />

      <DashboardContainer>
        <MainCard>
          <h1>Olá, Kenzie Academy!</h1>
          <h3>Qual hábito quer começar hoje?</h3>
          <ImageMainCard>
            <Lottie options={lottieOptions} />
          </ImageMainCard>
        </MainCard>

        <FiltersAndButtonsWrapper>
          <FilterCategory handleFilter={handleFilter} />
          <div>
            <NewHabit />
          </div>
        </FiltersAndButtonsWrapper>

        <CardsList>
          {habits.length > 0 && !allHabits
            ? myHabits.map((habit) => (
                <HabitCard habit={habit} key={habit.id} />
              ))
            : habits.length > 0 && allHabits
            ? habits.map((habit) => <HabitCard habit={habit} key={habit.id} />)
            : MOCK_HABIT.map((habit, index) => (
                <HabitCard habit={habit} key={index} />
              ))}
        </CardsList>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

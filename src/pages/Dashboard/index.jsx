import NewHabit from "../../components/ModalNewHabit";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/main.json";
import FilterCategory from "../../components/Filter";
import { useState, useEffect, useContext } from "react";
import { useHabit } from "../../providers/Habit";

import {
  CardsList,
  DashboardContainer,
  FiltersAndButtonsWrapper,
  ImageMainCard,
  MainCard,
  NewProfile,
} from "./styles";
import HabitCard from "../../components/HabitCard";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../providers/User";

const Dashboard = () => {
  const { authenticated, user } = useContext(UserContext);

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
  const [allHabits, setAllHabits] = useState(
    JSON.parse(localStorage.getItem(`@Habitare:dashboardLastCategor`)) ===
      "displayAll"
      ? true
      : false
  );

  useEffect(() => {
    loadHabits();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const lastCategory = JSON.parse(
      localStorage.getItem(`@Habitare:dashboardLastCategory`)
    );
    console.log(lastCategory, "123");
    lastCategory === "displayAll"
      ? setMyHabits(habits)
      : setMyHabits(habits.filter((habit) => habit.category === lastCategory));
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

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {/* <Aside /> */}

      <DashboardContainer>
        <MainCard>
          <h1>Olá, {user.username}!</h1>
          <h3>Qual hábito quer começar hoje?</h3>
          <ImageMainCard>
            <Lottie options={lottieOptions} />
          </ImageMainCard>
        </MainCard>

        <FiltersAndButtonsWrapper>
          <div>
            <FilterCategory handleFilter={handleFilter} page="dashboard" />
          </div>
          <div>
            <NewHabit />
          </div>
        </FiltersAndButtonsWrapper>

        <CardsList>
          {habits.length > 0 && !allHabits ? (
            myHabits.map((habit) => <HabitCard habit={habit} key={habit.id} />)
          ) : habits.length > 0 && allHabits ? (
            habits.map((habit) => <HabitCard habit={habit} key={habit.id} />)
          ) : (
            <NewProfile>
              <h1>Queremos te ajudar a praticar novos hábitos!</h1>
              <h2> Comece agora clicando em NOVO HÁBITO</h2>
            </NewProfile>
          )}
        </CardsList>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

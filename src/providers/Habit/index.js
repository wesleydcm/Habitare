import { createContext, useState, useContext } from "react";
import jwt_decode from "jwt-decode";
import { notification } from "antd";
import { FaFrown, FaTimes, FaGrinAlt } from "react-icons/fa";

import api from "../../services/api";
export const HabitContext = createContext([]);

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [habitsAchieved, setHabitsAchieved] = useState([]);

  const loadHabits = () => {
    setHabits([]);
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const filterHabitsAchieved = response.data.filter(
          (habits) => habits.achieved === true
        );
        const filterHabitsNotAchieved = response.data.filter(
          (habits) => habits.achieved === false
        );

        setHabitsAchieved(filterHabitsAchieved);
        setHabits(filterHabitsNotAchieved);
      });
  };

  const createHabit = (data) => {
    // data = {title, category, difficulty, frequency, achivied, how_much_achivied, user}, sendo o user o userId
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";
    const userId = jwt_decode(token).user_id;

    const newHabit = {
      ...data,
      how_much_achieved: 0,
      achieved: false,
      user: userId,
    };

    api
      .post("habits/", newHabit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const habit = response.data;
        setHabits([...habits, habit]);

        notification.open({
          message: "PARABÉNS",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description:
            "Você é uma pessoa determinada em alcançar seus objetivos. Novo hábito criado com sucesso!",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });
      })
      .catch((_) => {
        notification.open({
          message: "ERRO AO CRIAR HÁBITO",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Por favor verificar sua conexão e tente novamente",
          icon: <FaFrown style={{ color: "var(--pink)" }} />,
        });
      });
  };

  const updateHabit = (habitId, data) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";
    console.log(data);
    api
      .patch(`habits/${habitId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newHabits = habits.filter((habit) => {
          return habit.id !== habitId;
        });
        const updatedHabit = response.data;
        setHabits([...newHabits, updatedHabit]);
        loadHabits();
        notification.open({
          message: "PARABÉNS POR ISSO",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description:
            "Você é uma pessoa determinada em alcançar seus objetivos. Check-in realizado com sucesso!",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });
      })
      .catch((_) =>
        notification.open({
          message: "Ops check-in não realizado",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Por favor verificar sua conexão e tente novamente",
          icon: <FaFrown style={{ color: "var(--pink)" }} />,
        })
      );
  };

  const deleteHabit = (habitId) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";
    api
      .delete(`habits/${habitId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        loadHabits();
        notification.open({
          message: "VOCÊ ABANDONOU UM HÁBITO",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Foi uma decisão consciente? esperamos que sim =)",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });
      })
      .catch((_) => {
        notification.open({
          message: "ERRO AO DELETAR HÁBITO",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Por favor verificar sua conexão e tente novamente",
          icon: <FaFrown style={{ color: "var(--pink)" }} />,
        });
      });
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        habitsAchieved,
        loadHabits,
        createHabit,
        updateHabit,
        deleteHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => useContext(HabitContext);

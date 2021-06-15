import { createContext, useState, useContext } from "react";
import jwt_decode from "jwt-decode";
import { notification } from "antd";
import { FaFrown, FaTimes, FaGrinAlt } from "react-icons/fa";

import api from "../../services/api";
export const HabitContext = createContext([]);

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const loadHabits = () => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits(response.data);
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
      .catch((err) => {
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
        loadHabits()
      });
  };

  return (
    <HabitContext.Provider
      value={{ habits, loadHabits, createHabit, updateHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => useContext(HabitContext);

import { createContext, useState, useContext } from "react";
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
    api
      .post("habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newHabit = response.data;
        setHabits([...habits, newHabit]);
      });
  };

  const updateHabit = (habitId, data) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";
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

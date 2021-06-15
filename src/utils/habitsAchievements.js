import { useContext } from "react";
import { AchievementContext } from "../providers/Achievement";

const mockHabits = {
  "Praticar a gratidão": "8",
  "Desconecte-se do celular": "12",
  "Planejar gastos": "15",
  "Monitorar gastos": "16",
  "Regar as plantas": "21",
  "Varrer o chão": "22",
  "Ler um capítulo de um livro": "25",
};

export const IsMockHabitComplete = (habitTitle) => {
  const { completeAchievement } = useContext(AchievementContext);
  const habitExist = mockHabits[habitTitle];
  !!habitExist && completeAchievement(habitExist);
};

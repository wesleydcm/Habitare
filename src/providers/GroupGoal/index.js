import { createContext, useState, useContext } from "react";

import { notification } from "antd";
import { FaFrown, FaTimes, FaGrinAlt } from "react-icons/fa";

import api from "../../services/api";

export const GoalContext = createContext([]);

export const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);
  const [oneGoal, setOneGoal] = useState([]);

  const loadGoals = () => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .get("goals/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGoals(response.data.results);
      });
  };

  const getOneGoal = (goalId) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .get(`goals/${goalId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setOneGoal(response.data);
      });
  };

  const createGoal = (data) => {
    //data = title, difficulty, group (id)
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    const newGoal = {
      ...data,
      how_much_achieved: 0,
    };

    api
      .post("goals/", newGoal, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const goal = response.data;
        setGoals([...goals, goal]);

        notification.open({
          message: "PARABÉNS",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Nova meta criada com sucesso!",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });
      })
      .catch((err) => {
        notification.open({
          message: "ERRO AO CRIAR META",
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

  const updateGoal = (goalId, data) => {
    // data =  "title", "achieved", "how_much_achieved" ...
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .patch(`goals/${goalId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newGoals = goals.filter((goals) => {
          return goals.id !== goalId;
        });
        const updatedGoals = response.data;
        setGoals([...newGoals, updatedGoals]);

        notification.open({
          message: "ATUALIZADO",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Meta atualizada com sucesso!",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });
      })
      .catch((err) => {
        notification.open({
          message: "ERRO AO ATUALIZAR META",
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
    <GoalContext.Provider
      value={{ goals, oneGoal, loadGoals, getOneGoal, createGoal, updateGoal }}
    >
      {children}
    </GoalContext.Provider>
  );
};

export const useGoal = () => useContext(GoalContext);

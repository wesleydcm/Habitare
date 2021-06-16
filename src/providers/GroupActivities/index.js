import { createContext, useState, useContext } from "react";

import { notification } from "antd";
import { FaFrown, FaTimes, FaGrinAlt } from "react-icons/fa";

import api from "../../services/api";
import { useGroupHabit } from "../GroupHabit";

export const ActivitiesContext = createContext([]);

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [oneActivity, setOneActivity] = useState([]);

  const {getSpecificGroup} = useGroupHabit()


  const loadActivities = () => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .get("activities/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setActivities(response.data.results);
      });
  };

  const getOneActivity = (idActivity) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .get(`activities/${idActivity}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setOneActivity(response.data);
        console.log(response.data);
      });
  };

  const createActivity = (data) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .post("activities/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const activity = response.data;
        setActivities([...activities, activity]);

        notification.open({
          message: "PARABÉNS",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Nova atividade criada com sucesso!",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });

        getSpecificGroup(data.group)
      })
      .catch((err) => {
        notification.open({
          message: "ERRO AO CRIAR ATIVIDADE",
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

  const updateActivity = (activityId, data, groupId) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .patch(`activities/${activityId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newActivities = activities.filter((activity) => {
          return activity.id !== activityId;
        });
        const updatedActivity = response.data;
        setActivities([...newActivities, updatedActivity]);

        notification.open({
          message: "PARABÉNS",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Nova atividade atualizada com sucesso!",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });

        getSpecificGroup(groupId)

      })
      .catch((err) => {
        notification.open({
          message: "ERRO AO ATUALIZAR ATIVIDADE",
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


  const deleteActivity = (idActivity, groupId) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .delete(`activities/${idActivity}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        notification.open({
          message: "ATIVIDADE EXCLUÍDA",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Atividade excluída. Comece outra agora mesmo!",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });

        getSpecificGroup(groupId)

      })
      .catch((err) => {
        notification.open({
          message: "ERRO AO EXCLUIR ATIVIDADE",
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
    <ActivitiesContext.Provider
      value={{
        activities,
        oneActivity,
        loadActivities,
        getOneActivity,
        createActivity,
        updateActivity,
        deleteActivity
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);

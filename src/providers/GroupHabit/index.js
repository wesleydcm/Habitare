import { createContext, useState, useContext } from "react";

import api from "../../services/api";

import { notification } from "antd";
import { FaFrown, FaTimes, FaGrinAlt } from "react-icons/fa";

export const GroupContext = createContext([]);

export const GroupHabitProvider = ({ children }) => {
  const [groupHabits, setGroupHabits] = useState([]);
  const [globalGroupHabits, setGlobalGroupsHabits] = useState([]);
  const [specifcGroup, setSpecifcGroup] = useState([]);

  const getGlobalGroupsHabits = () => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";
    api
      .get("groups/?category=%40Habitare%2F", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        let data = response.data;

        data.results = data.results.map(group => {
          const categoryFormatted = group.category.replace("@Habitare/", "");

          const output = {
            ...group,
            category: categoryFormatted
          }

          return output
        })

        setGlobalGroupsHabits(data);
      });
  };

  const createGroupHabit = (data) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    const newGroup = {
      ...data,
      category: `@Habitare/${data.category}`
    }

    api
      .post("groups/", newGroup, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const group = response.data;
        setGroupHabits([...groupHabits, group]);
        console.log(response);
        notification.open({
          message: "PARABÉNS",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Novo grupo criado com sucesso!",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });
      })
      .catch((err) => {
        notification.open({
          message: "ERRO AO CRIAR GRUPO",
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

  const updateGroupHabit = (groupId, data) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .patch(`habits/${groupId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newGroupHabit = groupHabits.filter((groupHabit) => {
          return groupHabit.id !== groupId;
        });
        const updatedGroupHabit = response.data;
        setGroupHabits([...newGroupHabit, updatedGroupHabit]);
      });
  };

  const loadGroupHabits  = () => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";
    api
      .get("groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        let data = response.data;

        data = data.map(group => {
          const categoryFormatted = group.category.replace("@Habitare/", "");

          const output = {
            ...group,
            category: categoryFormatted
          }

          return output
        })

        setGroupHabits(data);
      });
  };

  const subscribeGroupHabit = (groupId) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .post("groups/61/subscribe/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        notification.open({
          message: "PARABÉNS",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Você acaba de entrar em um novo grupo!",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });
      })
      .catch((err) => {
        notification.open({
          message: "ERRO AO ENTRAR NO GRUPO",
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

  const getSpecificGroup = (idGroup) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";
    api
      .get(`groups/${idGroup}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setSpecifcGroup(response.data);
      });
  };

  return (
    <GroupContext.Provider
      value={{
        groupHabits,
        globalGroupHabits,
        specifcGroup,
        loadGroupHabits,
        createGroupHabit,
        updateGroupHabit,
        getGlobalGroupsHabits,
        subscribeGroupHabit,
        getSpecificGroup,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroupHabit = () => useContext(GroupContext);

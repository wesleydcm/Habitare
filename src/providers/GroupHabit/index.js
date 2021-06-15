import { createContext, useState, useContext } from "react";

import api from "../../services/api";

import { notification } from "antd";
import { FaFrown, FaTimes, FaGrinAlt } from "react-icons/fa";
import { categoryFormat } from "../../utils/format";
import { useHistory } from "react-router-dom";

export const GroupContext = createContext([]);

export const GroupHabitProvider = ({ children }) => {
  const [groupHabits, setGroupHabits] = useState([]);
  const [globalGroupHabits, setGlobalGroupsHabits] = useState([]);
  const [specificGroup, setSpecificGroup] = useState({});

  const history = useHistory()

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

        data.results = data.results.map((group) => {
          const categoryFormatted = group.category.replace("@Habitare/", "");

          const output = {
            ...group,
            category: categoryFormatted,
          };

          return output;
        });

        setGlobalGroupsHabits(data);
      });
  };

  const createGroupHabit = (data) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    const newGroup = {
      ...data,
      category: `@Habitare/${data.category}`,
    };

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
      .patch(`groups/${groupId}/`, data, {
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

        notification.open({
          message: "GRUPO ATUALIZADO",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Grupo atualizado com sucesso!",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        })
        getSpecificGroup(groupId)
      })
      .catch((err) => {
        notification.open({
          message: "ERRO AO ATUALIZAR GRUPO",
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

  const loadGroupHabits = () => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";
    api
      .get("groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        let data = response.data;

        data = data.map((group) => {
          const categoryFormatted = group.category.replace("@Habitare/", "");

          const output = {
            ...group,
            category: categoryFormatted,
          };

          return output;
        });

        setGroupHabits(data);
      });
  };

  const subscribeGroupHabit = (groupId) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .post(`groups/${groupId}/subscribe/`, {}, {
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

        getSpecificGroup(groupId);
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

  const unsubscribeGroupHabit = (groupId) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .delete(`groups/${groupId}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        notification.open({
          message: "VOCÊ SAIU",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Abandonou o barco. Espero que encontre a galera certa para você. =(",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });

        getSpecificGroup(groupId);
      })
      .catch((err) => {
        notification.open({
          message: "ERRO AO SAIR DO GRUPO",
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
    const user = JSON.parse(localStorage.getItem("@Habitare:User")) || "";

    api
      .get(`groups/${idGroup}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        let group = response.data;

        const category = group.category.replace("@Habitare/", "");
        const categoryFormatted = categoryFormat(category);

        let creator = false;
        let onGroup = false;

        if (user.id === group.creator.id) {
          creator = true;
        }

        group.users_on_group.forEach((userOnGroup) => {
          if (user.id === userOnGroup.id) {
            onGroup = true;
          }
        });

        const output = {
          ...group,
          category,
          categoryFormatted,
          creator,
          onGroup,
        };

        setSpecificGroup(output);
      });
  };

  const deleteGroup = (groupId) => {
    const token = JSON.parse(localStorage.getItem("@Habitare:Token")) || "";

    api
      .delete(`groups/${groupId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        notification.open({
          message: "VOCÊ EXCLUIU UM GRUPO!",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
          },
          description: "Foi uma decisão consciente? esperamos que sim =)",
          icon: <FaGrinAlt style={{ color: "var(--yellow)" }} />,
        });

        history.push("/groups")
      })
      .catch((_) => {
        notification.open({
          message: "ERRO AO DELETAR GRUPO",
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
    <GroupContext.Provider
      value={{
        groupHabits,
        globalGroupHabits,
        specificGroup,
        loadGroupHabits,
        createGroupHabit,
        updateGroupHabit,
        getGlobalGroupsHabits,
        subscribeGroupHabit,
        getSpecificGroup,
        deleteGroup,
        setSpecificGroup,
        unsubscribeGroupHabit
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroupHabit = () => useContext(GroupContext);
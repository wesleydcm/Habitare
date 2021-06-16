import { useContext, useEffect, useState } from "react";

import { Redirect, useHistory, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import FilterCategory from "../../components/Filter";
import GroupCard from "../../components/GroupCard";
import NewGroup from "../../components/ModalNewGroup";
import { useGroupHabit } from "../../providers/GroupHabit";
import { UserContext } from "../../providers/User";
import {
  ButtonsWrapper,
  FiltersAndButtonsWrapper,
  GroupsContainer,
  GroupsList,
} from "./styles";

const Groups = () => {
  const { authenticated } = useContext(UserContext);
  const {
    groupHabits,
    loadGroupHabits,
    getGlobalGroupsHabits,
    globalGroupHabits,
    render,
    setRender,
    id,
  } = useGroupHabit();

  const { pathname } = useLocation();
  const history = useHistory();

  const [myGroups, setMyGroups] = useState(groupHabits);

  const lastCategory = JSON.parse(
    localStorage.getItem(`@Habitare:groupsLastCategory`)
  );

  const [allGroups, setAllGroups] = useState(
    lastCategory === "displayAll" || lastCategory === null ? true : false
  );

  useEffect(() => {
    if (pathname === "/groups") {
      loadGroupHabits();
    } else if (pathname === "/groups/search") {
      getGlobalGroupsHabits();
    }
    // eslint-disable-next-line
  }, [pathname]);

  useEffect(() => {
    if (render) {
      loadGroupHabits();
      getGlobalGroupsHabits();
      setRender(!render);
      history.push(`/groups/${id}`);
    }
    // eslint-disable-next-line
  }, [render]);

  useEffect(() => {
    const lastCategory = JSON.parse(
      localStorage.getItem(`@Habitare:groupsLastCategory`)
    );

    lastCategory === "displayAll"
      ? setMyGroups(groupHabits)
      : setMyGroups(
          groupHabits.filter((habit) => habit.category === lastCategory)
        );
  }, [groupHabits]);

  const handleFilter = (category) => {
    if (category === "displayAll") {
      setMyGroups(groupHabits);
      setAllGroups(true);
    } else {
      const filteredHabits = groupHabits.filter(
        (group) => group.category === category
      );
      setMyGroups(filteredHabits);
      setAllGroups(false);
    }
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <GroupsContainer>
      <FiltersAndButtonsWrapper>
        <FilterCategory
          handleFilter={handleFilter}
          page="groups"
        ></FilterCategory>
        <ButtonsWrapper>
          <Button
            onClickFunc={() => history.push("/groups")}
            whiteSchema={pathname === "/groups" ? true : false}
          >
            Seus grupos
          </Button>
          <Button
            onClickFunc={() => history.push("/groups/search")}
            whiteSchema={pathname === "/groups/search" ? true : false}
          >
            Descobrir
          </Button>
          <NewGroup />
        </ButtonsWrapper>
      </FiltersAndButtonsWrapper>
      {pathname === "/groups" ? (
        <>
          <h2>Seus grupos</h2>
          {groupHabits.length === 0 ? (
            <h3>
              Você está perdendo a oportunidade de compartilhar metas com
              pessoas que estão no mesmo objetivo que o seu! <br />
              Junte-se agora em um grupo, selecionando o que mais combina com
              você em <strong>BUSCAR GRUPOS</strong> ou crie um novo.
            </h3>
          ) : (
            <GroupsList>
              {allGroups
                ? groupHabits.map((group) => {
                    return <GroupCard group={group} key={group.id} />;
                  })
                : myGroups.map((group) => {
                    return <GroupCard group={group} key={group.id} />;
                  })}
            </GroupsList>
          )}
        </>
      ) : (
        pathname === "/groups/search" && (
          <>
            <h2>Todos os grupos</h2>
            <GroupsList>
              {globalGroupHabits.results?.map((group) => {
                return <GroupCard group={group} key={group.id} />;
              })}
            </GroupsList>
          </>
        )
      )}
    </GroupsContainer>
  );
};

export default Groups;

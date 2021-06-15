import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { FaUsers, FaCheckDouble, FaTasks } from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useGroupHabit } from "../../providers/GroupHabit";
import { difficultyFormat } from "../../utils/format";
import {
  GroupContainer,
  InfoCard,
  GroupTitleCard,
  HeaderCard,
  GoalsCard,
  UsersGroupCard,
  ActivitiesCard,
  Activity,
  ImageContainer,
  Goal,
  InfoHowMuchAchieved,
} from "./styles";

import ModalNewGoal from "../../components/ModalNewGoal";
import ModalNewActivity from "../../components/ModalNewActivity";
import ModalActivity from "../../components/ModalActivity";
import ModalGoals from "../../components/ModalGoals";

const Group = () => {
  const [paused, setPaused] = useState(true);

  const {
    getSpecificGroup,
    specificGroup: group,
    setSpecificGroup,
    subscribeGroupHabit,
  } = useGroupHabit();

  let { id } = useParams();

  useEffect(() => {
    getSpecificGroup(id);

    return () => {
      setSpecificGroup({});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubcription = () => {
    subscribeGroupHabit(id);
  };

  return (
    <GroupContainer>
      <div>
        <InfoCard category={group.category}>
          <HeaderCard category={group.category}>
            <h4>Descrição</h4>
          </HeaderCard>
          <div>
            <p>{group.description}</p>
          </div>
        </InfoCard>
        <GoalsCard category={group.category}>
          <HeaderCard category={group.category}>
            <h4>
              <FaCheckDouble /> Metas
            </h4>
            {group.onGroup && <ModalNewGoal idGroup={id} />}
          </HeaderCard>
          <div>
            {group.goals?.length === 0 ? (
              <span>Nenhuma meta cadastrada!</span>
            ) : (
              <>
                {group.goals?.map((goal) => {
                  return (
                    <ModalGoals
                      goal={goal}
                      key={goal.id}
                      groupId={id}
                      category={group.category}
                    />
                  );
                })}
              </>
            )}
          </div>
        </GoalsCard>
      </div>
      <div>
        <GroupTitleCard category={group.category}>
          <h1>{group.name}</h1>
          <h2>
            {group.categoryFormatted?.icon}
            {group.categoryFormatted?.title}
          </h2>
          {group.creator ? (
            <button>Editar</button>
          ) : group.onGroup ? (
            <button>Sair</button>
          ) : (
            <button onClick={handleSubcription}>Se inscrever</button>
          )}
          <ImageContainer category={group.category}>
            {group.categoryFormatted && (
              <Lottie
                options={group.categoryFormatted?.image}
                isPaused={paused}
              />
            )}
          </ImageContainer>
        </GroupTitleCard>
        <UsersGroupCard category={group.category}>
          <HeaderCard category={group.category}>
            <h4>
              <FaUsers />
              Aliados
            </h4>
          </HeaderCard>
          <div>
            <ul>
              {group.users_on_group?.map((user) => {
                return <li>{user.username}</li>;
              })}
            </ul>
          </div>
        </UsersGroupCard>
        <ActivitiesCard category={group.category}>
          <HeaderCard category={group.category}>
            <h4>
              <FaTasks />
              Atividades
            </h4>
            {group.onGroup && <ModalNewActivity idGroup={id} />}
          </HeaderCard>
          <div>
            <div>
              {group.activities?.length === 0 ? (
                <span>Nenhuma atividade iniciada</span>
              ) : (
                <>
                  {group.activities?.map((activity) => {
                    return (
                      <ModalActivity
                        activity={activity}
                        groupId={id}
                        key={activity.id}
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </ActivitiesCard>
      </div>
    </GroupContainer>
  );
};

export default Group;

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { FaUsers, FaCheckDouble, FaTasks } from "react-icons/fa";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

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
import ModalActivity from "../../components/ModalActivity";

const Group = () => {
  const [paused, setPaused] = useState(true);

  const {
    getSpecificGroup,
    specificGroup: group,
    setSpecificGroup,
    subscribeGroupHabit
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
    subscribeGroupHabit(id)
  }

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
                  const difficulty = difficultyFormat(goal?.difficulty);
                  return (
                    <Goal key={goal.id}>
                      <h2>{goal.title}</h2>
                      <span>{difficulty.icons}</span>
                      <InfoHowMuchAchieved
                        category={group.category}
                        howMuchAchieved={goal.how_much_achieved}
                      >
                        <div></div>
                      </InfoHowMuchAchieved>
                    </Goal>
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
            {group.onGroup && <ModalActivity idGroup={id} />}
          </HeaderCard>
          <div>
            <div>
              {group.activities?.length === 0 ? (
                <span>Nenhuma atividade iniciada</span>
              ) : (
                <>
                  {group.activities?.map((activity) => {
                    const timestamp = new Date(
                      activity.realization_time
                    ).getTime();
                    const now = new Date().getTime();
                    const date = format(
                      parseISO(activity.realization_time),
                      "dd MMM yyyy",
                      { locale: ptBR }
                    );
                    return (
                      <Activity isActive={timestamp - now < 0 ? true : false}>
                        <h2>{activity.title}</h2>
                        <p>
                          Cumprir até: <span>{date}</span>
                        </p>
                      </Activity>
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

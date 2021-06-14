import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/User";

import { categoryFormat } from "../../utils/format";
import { CardContainer, GroupInfo, ImageContainer } from "./styles";

const GroupCard = ({ group }) => {
  const {user: {id}} = useUser();

  const [groupFormatted, setGroupFormatted] = useState({});
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const categoryFormatted = categoryFormat(group.category);
    let onGroup = false
    group.users_on_group.forEach(user => {
      if (user.id === id) {
        onGroup = true }})

    const group_formatted = {
      ...group,
      categoryFormatted,
      onGroup
    };

    setGroupFormatted(group_formatted);
    // eslint-disable-next-line
  }, []);

  const history = useHistory();

  const openGroup = (id) => {
    history.push(`/groups/${id}`)
  }

  return (
    <CardContainer
      onMouseEnter={() => setPaused(false)}
      onMouseLeave={() => setPaused(true)}
      category={group.category}
      onClick={() => openGroup(groupFormatted.id)}
    >
      <GroupInfo>
        <h3>
          {groupFormatted.categoryFormatted?.icon}
          {groupFormatted.categoryFormatted?.title}
        </h3>
        <h2>{groupFormatted.name}</h2>


      </GroupInfo>
      <ImageContainer category={groupFormatted.category} className="lottie">
        {groupFormatted.categoryFormatted && (
          <Lottie
            options={groupFormatted.categoryFormatted?.image}
            isPaused={paused}
          />
        )}
      </ImageContainer>
    </CardContainer>
  );
};

export default GroupCard;

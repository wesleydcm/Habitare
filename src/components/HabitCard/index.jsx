import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { categoryFormat, difficultyFormat } from "../../utils/format";
import ModalCheckin from "../ModalCheckin";
import {
  CardContainer,
  HabitInfo,
  ImageContainer,
  InfoHowMuchAchieved,
} from "./styles";

const HabitCard = ({ habit }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [habitFormatted, setHabitFormatted] = useState({});
  const achievedPercentage = (parseInt(habit.how_much_achieved) / 120) * 100;
  const [paused, setPaused] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    const difficultyFormatted = difficultyFormat(habit.difficulty);
    const categoryFormatted = categoryFormat(habit.category);

    const habit_formatted = {
      ...habit,
      difficultyFormatted,
      categoryFormatted,
    };

    setHabitFormatted(habit_formatted);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CardContainer
        category={habitFormatted.category}
        onMouseEnter={() => setPaused(false)}
        onMouseLeave={() => setPaused(true)}
      >
        <HabitInfo onClick={showModal}>
          <h2>{habit.title}</h2>
          <h3>
            {habitFormatted.categoryFormatted?.icon}
            {habitFormatted.categoryFormatted?.title}
          </h3>
          <span>{habitFormatted.difficultyFormatted?.icons}</span>
          <InfoHowMuchAchieved howMuchAchieved={achievedPercentage}>
            <div></div>
          </InfoHowMuchAchieved>
        </HabitInfo>
        <ImageContainer category={habitFormatted.category} className="lottie">
          {habitFormatted.categoryFormatted && (
            <Lottie
              options={habitFormatted.categoryFormatted?.image}
              isPaused={paused}
            />
          )}
        </ImageContainer>
      </CardContainer>
      <ModalCheckin
        habit={habit}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      ></ModalCheckin>
    </>
  );
};

export default HabitCard;

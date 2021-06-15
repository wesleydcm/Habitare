import { Button } from "antd";
import { useEffect, useState } from "react";
import { useHabit } from "../../providers/Habit";
import {
  BarContainer,
  BarFill,
  WrapStars,
  BodyContainer,
  CustomModal,
  InfoContainer,
  ImageContainer,
  FrequencyWrapper,
} from "./styles";
import { FaTimes } from "react-icons/fa";
import { categoryFormat, difficultyFormat } from "../../utils/format";
import Lottie from "react-lottie";

const ModalCheckin = ({ habit, isModalVisible = false, setIsModalVisible }) => {
  const { deleteHabit, updateHabit } = useHabit();
  const [habitFormatted, setHabitFormatted] = useState({});
  const [achieved, setAchieved] = useState(false);
  const [paused, setPaused] = useState(true);
  const [achievedPercentage, setAchievedPercentage] = useState(
    (parseInt(habit.how_much_achieved) / 120) * 100
  );

  const handleCheckin = () => {
    const how_much_update =
      parseFloat(habit.how_much_achieved) +
      120 / (parseInt(habit.difficulty) * 20);
    parseFloat(how_much_update) >= 120 && setAchieved(true);
    console.log(how_much_update);
    setAchievedPercentage((parseInt(habit.how_much_achieved) / 120) * 100);
    const how_much_achieved = how_much_update;
    const data = { how_much_achieved, achieved };
    how_much_update <= 126 && updateHabit(habit.id, data);

    setIsModalVisible(false);
  };
  const handleDeleteHabit = () => {
    deleteHabit(habit.id);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
    <CustomModal
      visible={isModalVisible}
      width={500}
      title={habitFormatted.title}
      onCancel={handleCancel}
      closeIcon={<FaTimes />}
      category={habitFormatted.category}
      onMouseEnter={() => setPaused(false)}
      onMouseLeave={() => setPaused(true)}
      footer={[
        <Button onClick={handleDeleteHabit} type="submit">
          Abandonar Hábito
        </Button>,
        <Button onClick={handleCheckin} type="submit">
          CHECK-IN
        </Button>,
      ]}
    >
      <BarContainer>
        <BarFill achievedPercentage={achievedPercentage}></BarFill>
      </BarContainer>
      <ImageContainer category={habitFormatted.category} className="lottie">
        {habitFormatted.categoryFormatted && (
          <Lottie
            options={habitFormatted.categoryFormatted?.image}
            isPaused={paused}
          />
        )}
      </ImageContainer>
      <BodyContainer>
        <h3>
          {habitFormatted.categoryFormatted?.icon}
          {habitFormatted.categoryFormatted?.title}
        </h3>
        <InfoContainer>
          <FrequencyWrapper>{habitFormatted.frequency}</FrequencyWrapper>
          <WrapStars>{habitFormatted.difficultyFormatted?.icons}</WrapStars>
        </InfoContainer>
      </BodyContainer>
    </CustomModal>
  );
};

export default ModalCheckin;

import { Button } from "antd";
import { useContext, useEffect, useState } from "react";
import { HabitContext } from "../../providers/Habit";
import {
  BarContainer,
  BarFill,
  WrapStars,
  BodyContainer,
  CustomModal,
  InfoContainer,
  ImageContainer,
} from "./styles";
import { FaTimes } from "react-icons/fa";
import { categoryFormat, difficultyFormat } from "../../utils/format";
import Lottie from "react-lottie";

const ModalCheckin = ({ habit, isModalVisible = false, setIsModalVisible }) => {
  const { updateHabit } = useContext(HabitContext);
  const [habitFormatted, setHabitFormatted] = useState({});
  const [achieved, setAchieved] = useState(false);
  const [paused, setPaused] = useState(true);
  const [achievedPercentage, setAchievedPercentage] = useState(
    (parseInt(habit.how_much_achieved) / 60) * 100
  );

  const handleCheckin = () => {
    const how_much_update =
      parseFloat(habit.how_much_achieved) +
      60 / (parseInt(habit.difficulty) * 20);
    parseFloat(how_much_update) >= 60 && setAchieved(true);
    const data = { how_much_update, achieved };
    setAchievedPercentage((parseInt(habit.how_much_achieved) / 60) * 100);

    how_much_update <= 60 && updateHabit(habit.id, data);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const difficultyFormatted = difficultyFormat(parseInt(habit.difficulty));
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
        <Button onClick={handleCheckin} type="submit">
          CHECK-IN
        </Button>,
      ]}
    >
      <BarContainer></BarContainer>
      <BarFill achievedPercentage={achievedPercentage}></BarFill>
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
          <Button whiteScheme>{habitFormatted.frequency}</Button>
          <WrapStars>{habitFormatted.difficultyFormatted?.icons}</WrapStars>
        </InfoContainer>
      </BodyContainer>
    </CustomModal>
  );
};

export default ModalCheckin;

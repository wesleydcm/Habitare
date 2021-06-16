import { useContext, useEffect, useState } from "react";
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
import { ButtonWrap, ButtonForm } from "../ModalGroup/styles";
import { FaTrashAlt } from "react-icons/fa";
import { AchievementContext } from "../../providers/Achievement";

const mockHabits = {
  "Praticar a gratidão": "8",
  "Desconecte-se do celular": "12",
  "Planejar gastos": "15",
  "Monitorar gastos": "16",
  "Regar as plantas": "21",
  "Varrer o chão": "22",
  "Ler um capítulo de um livro": "25",
};

const categoriesAchievements = {
  spirit: "7",
  night: "11",
  money: "14",
  house: "19",
  focus: "24",
  fit: "27",
};

const ModalCheckin = ({ habit, isModalVisible = false, setIsModalVisible }) => {
  const { deleteHabit, updateHabit } = useHabit();
  const { completeAchievement } = useContext(AchievementContext);
  const [habitFormatted, setHabitFormatted] = useState({});
  const [paused, setPaused] = useState(true);
  const [achievedPercentage, setAchievedPercentage] = useState(
    (parseInt(habit.how_much_achieved) / 120) * 100
  );
  const [deleteScreenActivity, setDeleteScreenActivity] = useState(false);
  const handleCheckin = () => {
    let arrayAchievements = ["3"];
    const addPoints = 120 / (parseInt(habit.difficulty) * 20);
    const how_much_update = parseInt(habit.how_much_achieved) + addPoints;
    const achieved = how_much_update === 120;
    const how_much_achieved = how_much_update;
    const data = { how_much_achieved, achieved };
    how_much_update <= 120 && updateHabit(habit.id, data);
    habit.category === "fit" && arrayAchievements.push("28");

    how_much_update === 120
      ? isAchievementComplete(arrayAchievements)
      : completeAchievement(arrayAchievements);
    setAchievedPercentage((parseInt(how_much_achieved) / 120) * 100);
    setIsModalVisible(false);
  };

  const isAchievementComplete = (arrayAchievements) => {
    arrayAchievements.push("5");
    const habitExist = mockHabits[habit.title];
    const categoyExist = categoriesAchievements[habit.category];
    !!habitExist && arrayAchievements.push(habitExist);
    !!categoyExist && arrayAchievements.push(categoyExist);
    console.log(arrayAchievements);
    completeAchievement(arrayAchievements);
  };

  const handleDeleteHabit = () => {
    deleteHabit(habit.id);
    completeAchievement(["6"]);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setDeleteScreenActivity(false);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(true);
    setDeleteScreenActivity(true);
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
      onCancel={handleCloseModal}
      closeIcon={<FaTimes />}
      category={habitFormatted.category}
      onMouseEnter={() => setPaused(false)}
      onMouseLeave={() => setPaused(true)}
      footer={[
        <ButtonWrap>
          {deleteScreenActivity ? (
            <>
              <ButtonForm
                onClick={handleCancel}
                type="submit"
                style={{
                  fontSize: 15,
                  position: "relative",
                  zIndex: "2000",
                  minWidth: 110,
                }}
              >
                VOLTAR
              </ButtonForm>
              <ButtonForm
                delete
                onClick={() => handleDeleteHabit(true)}
                type="submit"
                style={{
                  fontSize: 15,
                  position: "relative",
                  zIndex: "2000",
                  minWidth: 120,
                }}
              >
                Confirmar <FaTrashAlt />
              </ButtonForm>
            </>
          ) : (
            <>
              <ButtonForm
                style={{
                  fontSize: 15,
                  position: "relative",
                  zIndex: "2000",
                  minWidth: 130,
                }}
                onClick={() => handleOk(true)}
                delete
              >
                Deletar Hábito
              </ButtonForm>
              <ButtonForm
                type="submit"
                onClick={handleCheckin}
                style={{
                  fontSize: 15,
                  position: "relative",
                  zIndex: "2000",
                  minWidth: 90,
                }}
              >
                CHECK-IN
              </ButtonForm>
            </>
          )}
        </ButtonWrap>,
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

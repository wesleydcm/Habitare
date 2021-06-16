import React, { useEffect, useState } from "react";
import { difficultyFormat } from "../../utils/format";
import {
  ButtonForm,
  ButtonWrap,
  CustomModal,
  Goal,
  InfoHowMuchAchieved,
  InfoModal,
} from "./styles";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import { useGoal } from "../../providers/GroupGoal";

const ModalGoals = ({ goal, groupId, category }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteScreenActivity, setDeleteScreenActivity] = useState(false);
  const [difficulty, setDifficulty] = useState({});
  const [achievedPercentage, setAchievedPercentage] = useState(
    (parseInt(goal.how_much_achieved) / 120) * 100
  );

  const {updateGoal} = useGoal();

  const handleCheckin = () => {
    const addPoints = 120 / (parseInt(goal.difficulty) * 20);
    const how_much_update = parseInt(goal.how_much_achieved) + addPoints;
    const achieved = how_much_update === 120;
    const how_much_achieved = how_much_update;
    const data = { how_much_achieved, achieved };
    how_much_update <= 120 && updateGoal(goal.id, data, groupId);

    setAchievedPercentage((parseInt(goal.how_much_achieved) / 120) * 100);
    setIsModalVisible(false);
  };


  const {deleteGoal} = useGoal();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setDeleteScreenActivity(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setDeleteScreenActivity(false);
  };

  useEffect(() => {
    const output = difficultyFormat(goal?.difficulty);
    setDifficulty(output);

    // eslint-disable-next-line
  }, []);

  const submitDelete = () => {
    deleteGoal(goal.id, groupId)
    showModal()
  }

  return (
    <>
      <Goal key={goal.id} onClick={showModal}>
        <h2>{goal.title}</h2>
        <span>{difficulty.icons}</span>
        <InfoHowMuchAchieved
          category={category}
          howMuchAchieved={goal.how_much_achieved}
        >
          <div></div>
        </InfoHowMuchAchieved>
      </Goal>

      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={500}
        title={`Visualizar meta`}
        okText="Criar"
        cancelText="Cancelar"
        closeIcon={<FaTimes />}
        footer={null}
      >
        {isModalVisible && (
          <InfoModal>
            <Goal>
              <h2>{goal.title}</h2>
              <span>{difficulty.icons}</span>
              <InfoHowMuchAchieved
                category={category}
                howMuchAchieved={goal.how_much_achieved}
              >
                <div></div>
              </InfoHowMuchAchieved>
            </Goal>
            <ButtonWrap>
              {deleteScreenActivity ? (
                <>
                  <ButtonForm
                    type="button"
                    onClick={() => setDeleteScreenActivity(false)}
                  >
                    Voltar
                  </ButtonForm>
                  <ButtonForm type="button" delete onClick={submitDelete}>
                    Confirmar <FaTrashAlt />
                  </ButtonForm>
                </>
              ) : (
                <>
                  <ButtonForm
                    type="button"
                    onClick={() => setDeleteScreenActivity(true)}
                    delete
                  >
                    Excluir
                  </ButtonForm>
                  <ButtonForm type="button" onClick={handleCheckin}>Check-in</ButtonForm>
                </>
              )}
            </ButtonWrap>
          </InfoModal>
        )}
      </CustomModal>
    </>
  );
};

export default ModalGoals;

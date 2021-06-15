import React, { useEffect, useState } from "react";
import { notification } from "antd";
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

const ModalGoals = ({ goal, groupId, category }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteScreenActivity, setDeleteScreenActivity] = useState(false);
  const [difficulty, setDifficulty] = useState({});

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const output = difficultyFormat(goal?.difficulty);
    setDifficulty(output);

    // eslint-disable-next-line
  }, []);

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
                  <ButtonForm type="button" delete>
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
                  <ButtonForm type="button">Check-in</ButtonForm>
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

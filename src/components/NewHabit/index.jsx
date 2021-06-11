import React, { useState } from "react";
// import { Button } from "antd";

import Button from "../Button";
import "antd/dist/antd.css";
import { FaTimes, FaPlus } from "react-icons/fa";
import {
  CustomModal,
  InputModal,
  CardCategory,
  CardFrequency,
  CardContainer,
  WrapStars,
} from "./styles";

import filledStar from "../../assets/svg/filledStar.svg";
import emptyStar from "../../assets/svg/emptyStar.svg";
import selectedStar from "../../assets/svg/selectedStar.svg";

const NewHabit = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>
        NOVO HÁBITO <FaPlus />
      </Button>

      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        title="Criar novo hábito"
        okText="Criar"
        cancelText="Cancelar"
        closeIcon={<FaTimes />}
      >
        <div className="wrap">
          <InputModal placeholder="Qual seu novo hábito?" />
        </div>
        <p>Em qual categoria seu hábito se encaixa?</p>
        <CardContainer>
          <CardCategory color="var(--colorSpirit)">
            <p>Corpo e mente saudáveis</p>
          </CardCategory>
          <CardCategory color="var(--colorFit)">
            <p>Ficando em forma</p>
          </CardCategory>
          <CardCategory color="var(--colorFocus)">
            <p>foco, força e fé</p>
          </CardCategory>
          <CardCategory color="var(--colorMoney)">
            <p>Me poupe</p>
          </CardCategory>
          <CardCategory color="var(--colorHouse)">
            <p>Lar doce lar</p>
          </CardCategory>
          <CardCategory color="var(--colorNight)">
            <p>Boa noite</p>
          </CardCategory>
        </CardContainer>
        <p>Com qual frequência?</p>
        <div className="wrap">
          <CardFrequency>
            <p>Diário</p>
          </CardFrequency>
          <CardFrequency>
            <p>Semanal</p>
          </CardFrequency>
          <CardFrequency>
            <p>Quinzenal</p>
          </CardFrequency>
          <CardFrequency>
            <p>Mensal</p>
          </CardFrequency>
        </div>
        <p>O quanto é difícil para você manter esse hábito?</p>
        <WrapStars>
          <img src={filledStar} alt="filled star" />
          <img src={filledStar} alt="filled star" />
          <img src={selectedStar} alt="selected star" />
          <img src={emptyStar} alt="empty star" />
          <img src={emptyStar} alt="empty star" />
        </WrapStars>
      </CustomModal>
    </>
  );
};

export default NewHabit;

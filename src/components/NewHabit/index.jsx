import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";

import { CustomModal, InputModal, CardCategory, CardFrequency } from "./styles";
import { InputItem } from "../Input/styles";

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
      <Button type="primary" onClick={showModal}>
        Criar novo hábito
      </Button>

      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        title="Criar novo hábito"
        style={{ borderRadius: "20px" }}
      >
        <div className="wrap">
          <InputModal placeholder="Qual seu novo hábito?" />
        </div>
        <p>Em qual categoria seu hábito se encaixa?</p>
        <div className="cardContainer">
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
        </div>
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
      </CustomModal>
    </>
  );
};

export default NewHabit;

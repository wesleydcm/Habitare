import React, { useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { FaTimes } from "react-icons/fa";
import {
  CustomModal,
  Container,
  InputModal,
  CardCategory,
  CardFrequency,
  CardContainer,
  WrapStars,
  LabelContainer,
} from "./styles";

import filledStar from "../../assets/svg/filledStar.svg";
import emptyStar from "../../assets/svg/emptyStar.svg";
import selectedStar from "../../assets/svg/selectedStar.svg";

import RadioInput from "./RadioInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleForm = (res) => console.log(res);

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
        okText="Criar"
        cancelText="Cancelar"
        closeIcon={<FaTimes />}
        okButtonProps={{ htmlType: "submit" }}
      >
        <RadioInput {...register("course_module")} />

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

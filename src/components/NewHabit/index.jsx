import React, { useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { FaTimes } from "react-icons/fa";
import {
  CustomModal,
  InputModal,
  CardCategory,
  CardFrequency,
  CardContainer,
  WrapStars,
  LabelContainer,
  ButtonForm,
} from "./styles";

import filledStar from "../../assets/svg/filledStar.svg";
import emptyStar from "../../assets/svg/emptyStar.svg";
import selectedStar from "../../assets/svg/selectedStar.svg";

import RadioInput from "./RadioInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import { Item, RadioButton, Wrapper } from "./RadioInput";

const NewHabit = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [select, setSelect] = useState("spirit");
  const [selectFrequency, setSelectFrequency] = useState("diario");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };
  const handleSelectFrequencyChange = (event) => {
    const value = event.target.value;
    setSelectFrequency(value);
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
        footer={null}
        bodyStyle={{ minHeight: 450 }}
      >
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="wrap">
            <InputModal placeholder="Qual seu novo hábito?" />
          </div>

          <p>Em qual categoria seu hábito se encaixa?</p>
          <CardContainer>
            <Item onChange={(event) => handleSelectChange(event)}>
              <p>Corpo e mente saudáveis</p>
              <RadioButton
                type="radio"
                name="radio"
                value="spirit"
                checked={select === "spirit"}
                {...register("category")}
              />
              <CardCategory color="var(--colorSpirit)" />
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <p>Ficando em forma</p>
              <RadioButton
                type="radio"
                name="radio"
                value="fit"
                checked={select === "fit"}
                {...register("category")}
              />
              <CardCategory color="var(--colorFit)" />
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <p>foco, força e fé</p>
              <RadioButton
                type="radio"
                name="radio"
                value="focus"
                checked={select === "focus"}
                {...register("category")}
              />
              <CardCategory color="var(--colorFocus)" />
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <p>Me poupe</p>
              <RadioButton
                type="radio"
                name="radio"
                value="money"
                checked={select === "money"}
                {...register("category")}
              />
              <CardCategory color="var(--colorMoney)" />
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <p>Lar doce lar</p>
              <RadioButton
                type="radio"
                name="radio"
                value="house"
                checked={select === "house"}
                {...register("category")}
              />
              <CardCategory color="var(--colorHouse)" />
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <p>Boa noite</p>
              <RadioButton
                type="radio"
                name="radio"
                value="night"
                checked={select === "night"}
                {...register("category")}
              />
              <CardCategory color="var(--colorNight)" />
            </Item>
          </CardContainer>

          <p>Com qual frequência?</p>
          <div className="wrap">
            <Item onClick={(event) => handleSelectFrequencyChange(event)}>
              <p>Diário</p>
              <RadioButton
                type="radio"
                name="radio"
                value="diario"
                checked={selectFrequency === "diario"}
                {...register("frequency")}
              />
              <CardFrequency />
            </Item>

            <Item onChange={(event) => handleSelectFrequencyChange(event)}>
              <p>Semanal</p>
              <RadioButton
                type="radio"
                name="radio"
                value="semanal"
                checked={selectFrequency === "semanal"}
                {...register("frequency")}
              />
              <CardFrequency />
            </Item>
            <Item onChange={(event) => handleSelectFrequencyChange(event)}>
              <p>Quinzenal</p>
              <RadioButton
                type="radio"
                name="radio"
                value="quinzenal"
                checked={selectFrequency === "quinzenal"}
                {...register("frequency")}
              />
              <CardFrequency />
            </Item>
            <Item onChange={(event) => handleSelectFrequencyChange(event)}>
              <p>Mensal</p>
              <RadioButton
                type="radio"
                name="radio"
                value="mensal"
                checked={selectFrequency === "mensal"}
                {...register("frequency")}
              />
              <CardFrequency />
            </Item>
          </div>
          <p>O quanto é difícil para você manter esse hábito?</p>
          <WrapStars>
            <Item onChange={(event) => handleSelectFrequencyChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="facil"
                checked={selectFrequency === "mensal"}
                {...register("difficulty")}
              />
              <img src={filledStar} alt="filled star" />
            </Item>

            <img src={selectedStar} alt="selected star" />
            <img src={emptyStar} alt="empty star" />
          </WrapStars>
          <ButtonForm>Cancelar</ButtonForm>
          <ButtonForm>Criar</ButtonForm>
        </form>
      </CustomModal>
    </>
  );
};

export default NewHabit;

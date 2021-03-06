import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "antd/dist/antd.css";
import { FaGrinAlt, FaTimes } from "react-icons/fa";
import { useGroupHabit } from "../../providers/GroupHabit";
import { notification } from "antd";
import Button from "../Button";

import {
  CustomModal,
  ButtonForm,
  ButtonWrap,
  CardCategory,
  CardContainer,
  CustomText,
  InputModal,
  Item,
  RadioButton,
  TextAreaModal,
} from "./styles";

const NewGroup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Todos os campos são obrigatórios"),
    category: yup.string().required("Todos os campos são obrigatórios"),
    description: yup.string().required("Todos os campos são obrigatórios"),
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [select, setSelect] = useState("");


  const showModal = () => {
    setIsModalVisible(true);
    setValue("name", "");
    setValue("description", "");
    setSelect("")
  };
  const handleOk = () => {
    setIsModalVisible(false);
    setValue("name", "");
    setValue("description", "");
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setValue("name", "");
    setValue("description", "");
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { createGroupHabit } = useGroupHabit();

  const submitForm = (data) => {
    if (errors.title) {
      notification.open({
        message: "ERRO AO CRIAR",
        closeIcon: <FaTimes />,
        style: {
          fontFamily: "Raleway",
          backgroundColor: "var(--gray)",
          WebkitBorderRadius: 14,
        },
        description:
          "Erro ao tentar criar novo grupo, por favor rever se todos os campos estão preenchidos!",
        icon: <FaGrinAlt style={{ color: "var(--purple)" }} />,
      });
    }

    createGroupHabit(data);
    handleOk();
  };

  return (
    <>
      <Button onClick={showModal}>Criar grupo</Button>

      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        title="Criar novo grupo"
        okText="Criar"
        cancelText="Cancelar"
        closeIcon={<FaTimes />}
        footer={null}
        bodyStyle={{ minHeight: 450 }}
      >
        <form onSubmit={handleSubmit(submitForm)}>
          <InputModal>
            <input
              type="text"
              placeholder="Qual seu nome do grupo?"
              {...register("name")}
              required
            />
          </InputModal>
          <p>Em qual categoria seu grupo se encaixa?</p>
          <CardContainer>
            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="spirit"
                checked={select === "spirit"}
                {...register("category")}
                color="var(--colorSpirit)"
                required
              />
              <CardCategory color="var(--colorSpirit)">
                <CustomText color="var(--colorSpirit)">
                  Corpo e mente saudáveis
                </CustomText>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="fit"
                checked={select === "fit"}
                {...register("category")}
                color="var(--colorFit)"
                required
              />
              <CardCategory color="var(--colorFit)">
                <CustomText color="var(--colorFit)">
                  Ficando em forma
                </CustomText>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="focus"
                checked={select === "focus"}
                {...register("category")}
                color="var(--colorFocus)"
                required
              />
              <CardCategory color="var(--colorFocus)">
                <CustomText color="var(--colorFocus)">
                  Foco, força e fé
                </CustomText>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="money"
                checked={select === "money"}
                {...register("category")}
                color="var(--colorMoney)"
                required
              />
              <CardCategory color="var(--colorMoney)">
                <CustomText color="var(--colorMoney)">Me poupe</CustomText>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="house"
                checked={select === "house"}
                {...register("category")}
                color="var(--colorHouse)"
                required
              />
              <CardCategory color="var(--colorHouse)">
                <CustomText color="var(--colorHouse)">Lar doce lar</CustomText>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="night"
                checked={select === "night"}
                {...register("category")}
                color="var(--colorNight)"
                required
              />
              <CardCategory color="var(--colorNight)">
                <CustomText color="var(--colorNight)">Boa noite</CustomText>
              </CardCategory>
            </Item>
          </CardContainer>
          <TextAreaModal>
            <label htmlFor="description">Descreva seu grupo:</label>
            <textarea
              {...register("description")}
              id="description"
              required
              placeholder="Descreva seu grupo"
            ></textarea>
          </TextAreaModal>
          <ButtonWrap>
            <ButtonForm type="submit">Criar</ButtonForm>
          </ButtonWrap>
        </form>
      </CustomModal>
    </>
  );
};

export default NewGroup;

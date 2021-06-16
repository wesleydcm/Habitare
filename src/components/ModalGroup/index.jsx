import React, { useState } from "react";
import { FaTimes, FaTrashAlt, FaGrinAlt } from "react-icons/fa";
import { notification } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "antd/dist/antd.css";
import { useGroupHabit } from "../../providers/GroupHabit";
import {
  ButtonForm,
  ButtonWrap,
  CustomModal,
  InfoModal,
  CardCategory,
  CardContainer,
  CustomText,
  InputModal,
  Item,
  RadioButton,
  TextAreaModal,
} from "./styles";
import { useHistory } from "react-router";

const ModalGroup = ({ group }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteScreenActivity, setDeleteScreenActivity] = useState(false);

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

  const [select, setSelect] = useState(group.category);
  const [inputValue, setInputValue] = useState(group.name);
  const [descriptionValue, setDescriptionValue] = useState(group.description);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const schema = yup.object().shape({
    name: yup.string().required("Todos os campos são obrigatórios"),
    category: yup.string().required("Todos os campos são obrigatórios"),
    description: yup.string().required("Todos os campos são obrigatórios"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { updateGroupHabit, deleteGroup } = useGroupHabit();

  const history = useHistory();

  const submitForm = async (data) => {
    if (errors.title) {
      notification.open({
        message: "ERRO AO EDITAR",
        closeIcon: <FaTimes />,
        style: {
          fontFamily: "Raleway",
          backgroundColor: "var(--gray)",
          WebkitBorderRadius: 14,
        },
        description:
          "Erro ao tentar editar grupo, por favor rever se todos os campos estão preenchidos!",
        icon: <FaGrinAlt style={{ color: "var(--purple)" }} />,
      });

      return;
    }

    await updateGroupHabit(group.id, data);
    handleOk();
  };

  const submitDelete = async () => {
    await deleteGroup(group.id);
    handleOk();
    history.push("/groups");
  };

  return (
    <>
      <button onClick={showModal}>Editar</button>

      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        title={`Editar grupo`}
        okText="Criar"
        cancelText="Cancelar"
        closeIcon={<FaTimes />}
        footer={null}
      >
        {isModalVisible && (
          <InfoModal>
            <form onSubmit={handleSubmit(submitForm)}>
              <InputModal>
                <input
                  type="text"
                  placeholder="Qual seu nome do grupo?"
                  {...register("name", { value: inputValue })}
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
                    <CustomText color="var(--colorHouse)">
                      Lar doce lar
                    </CustomText>
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
                  {...register("description", { value: descriptionValue })}
                  id="description"
                  required
                  placeholder="Descreva seu grupo"
                ></textarea>
              </TextAreaModal>

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
                    <ButtonForm type="submit">Salvar</ButtonForm>
                  </>
                )}
              </ButtonWrap>
            </form>
          </InfoModal>
        )}
      </CustomModal>
    </>
  );
};

export default ModalGroup;

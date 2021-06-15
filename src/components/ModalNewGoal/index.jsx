import React, { useState } from "react";
import { FaGrinAlt, FaPlus, FaTimes } from "react-icons/fa";

import {
  CustomModal,
  InputModal,
  WrapStars,
  StartsInput,
  DificultyItem,
  RadioButtonDificulty,
  ButtonForm,
  ButtonWrap,
} from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { notification } from "antd";

import filledStar from "../../assets/svg/filledStar.svg";
import emptyStar from "../../assets/svg/emptyStar.svg";
import selectedStar from "../../assets/svg/selectedStar.svg";
import { useGoal } from "../../providers/GroupGoal";

const FormNewGoal = ({ closeModal, idGroup }) => {
  const [selectDificulty, setSelectDificulty] = useState("");

  const handleSelectDificultyChange = (event) => {
    const value = event.target.value;
    setSelectDificulty(value);
  };

  const schema = yup.object().shape({
    title: yup.string().required("Todos os campos são obrigatórios"),
    difficulty: yup.string().required("Todos os campos são obrigatórios"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { createGoal } = useGoal();

  const submitForm = async (data) => {
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
          "Erro ao tentar criar nova meta, por favor rever se todos os campos estão preenchidos!",
        icon: <FaGrinAlt style={{ color: "var(--purple)" }} />,
      });

      return;
    }

    console.log(data);

    await createGoal({ ...data, group: idGroup });
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <InputModal>
        <input
          type="text"
          placeholder="Qual será a meta?"
          {...register("title", { value: "" })}
          required
        />
      </InputModal>

      <p>O quanto é difícil será atingir esta meta?</p>
      <WrapStars>
        <DificultyItem onChange={(event) => handleSelectDificultyChange(event)}>
          <RadioButtonDificulty
            type="radio"
            name="radio"
            value="1"
            checked={selectDificulty === "1"}
            {...register("difficulty")}
            required
          />

          {selectDificulty === "1" && (
            <StartsInput src={selectedStar} alt="filled star" />
          )}
          {selectDificulty === "2" && (
            <StartsInput src={filledStar} alt="filled star" />
          )}
          {selectDificulty === "3" && (
            <StartsInput src={filledStar} alt="filled star" />
          )}
          {selectDificulty === "1" && <p>Fácil</p>}
        </DificultyItem>

        <DificultyItem onChange={(event) => handleSelectDificultyChange(event)}>
          <RadioButtonDificulty
            type="radio"
            name="radio"
            value="2"
            checked={selectDificulty === "2"}
            {...register("difficulty")}
            required
          />
          {selectDificulty === "1" && (
            <StartsInput src={emptyStar} alt="filled star" />
          )}
          {selectDificulty === "2" && (
            <StartsInput src={selectedStar} alt="filled star" />
          )}
          {selectDificulty === "3" && (
            <StartsInput src={filledStar} alt="filled star" />
          )}
          {selectDificulty === "2" && <p className="medio">Médio</p>}
        </DificultyItem>

        <DificultyItem onChange={(event) => handleSelectDificultyChange(event)}>
          <RadioButtonDificulty
            type="radio"
            name="radio"
            value="3"
            checked={selectDificulty === "3"}
            {...register("difficulty")}
            required
          />
          {selectDificulty === "1" && (
            <StartsInput src={emptyStar} alt="filled star" />
          )}
          {selectDificulty === "2" && (
            <StartsInput src={emptyStar} alt="filled star" />
          )}
          {selectDificulty === "3" && (
            <StartsInput src={selectedStar} alt="filled star" />
          )}
          {selectDificulty === "3" && <p>Difícil</p>}
        </DificultyItem>
      </WrapStars>

      <ButtonWrap>
        <ButtonForm type="submit">Criar</ButtonForm>
      </ButtonWrap>
    </form>
  );
};

const ModalNewGoal = ({ idGroup }) => {
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
      <FaPlus onClick={showModal} />

      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        title="Criar nova meta"
        okText="Criar"
        cancelText="Cancelar"
        closeIcon={<FaTimes />}
        footer={null}
      >
        {isModalVisible && (
          <FormNewGoal
            closeModal={handleOk}
            isModalVisible={isModalVisible}
            idGroup={idGroup}
          />
        )}
      </CustomModal>
    </>
  );
};

export default ModalNewGoal;

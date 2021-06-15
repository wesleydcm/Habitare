import React, { useState } from "react";
import { FaGrinAlt, FaPlus, FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DatePicker, notification } from "antd";

import {
  ButtonForm,
  ButtonWrap,
  CustomModal,
  DateWrapper,
  InputModal,
} from "./styles";
import { useActivities } from "../../providers/GroupActivities";

const FormNewActivity = ({ closeModal, idGroup }) => {
  const [date, setDate] = useState({})
  const schema = yup.object().shape({
    title: yup.string().required("Todos os campos são obrigatórios"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleDate = (date, dateString) => {
    setDate(date._d)
  };

  const {createActivity} = useActivities();

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
          "Erro ao tentar criar nova atividade, por favor rever se todos os campos estão preenchidos!",
        icon: <FaGrinAlt style={{ color: "var(--purple)" }} />,
      });

      return;
    }

    await createActivity({ ...data, realization_time: date, group: idGroup });
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <InputModal>
        <input
          type="text"
          placeholder="Qual a atividade?"
          {...register("title", { value: "" })}
          required
        />
      </InputModal>
      <DateWrapper>
        <p>Qual a data limite para cumprir esta atividade?</p>
        <DatePicker
          onChange={handleDate}
          format={"DD-MM-YYYY"}
          size={"large"}
          style={{
            fontFamily: "Raleway",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 14,
            borderBlockColor: "var(--purple)",
            borderColor: "var(--purple)",
            borderWidth: 3,
            borderLeftWidth: 3,
            borderLeftColor: "var(--purple)",
            borderRightColor: "var(--purple)",
            boxShadow: 'none'
          }}
          placeholder="Cumprir até"
        />
      </DateWrapper>
      <ButtonWrap>
        <ButtonForm type="submit">Criar</ButtonForm>
      </ButtonWrap>
    </form>
  );
};

const ModalActivity = ({ idGroup }) => {
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
        title="Criar nova atividade"
        okText="Criar"
        cancelText="Cancelar"
        closeIcon={<FaTimes />}
        footer={null}
      >
        {isModalVisible && (
          <FormNewActivity
            closeModal={handleOk}
            isModalVisible={isModalVisible}
            idGroup={idGroup}
          />
        )}
      </CustomModal>
    </>
  );
};

export default ModalActivity;

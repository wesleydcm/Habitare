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

const ModalNewActivity = ({ idGroup }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Todos os campos são obrigatórios"),
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [date, setDate] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const handleDate = (date, dateString) => {
    setDate(date?._d);
  };

  const showModal = () => {
    setIsModalVisible(true);
    setValue("title", "");
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setValue("title", "");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setValue("title", "");
  };

  const { createActivity } = useActivities();

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
    handleOk();
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
        <form onSubmit={handleSubmit(submitForm)}>
          <InputModal>
            <input
              type="text"
              placeholder="Qual a atividade?"
              {...register("title")}
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
                boxShadow: "none",
              }}
              placeholder="Cumprir até"
            />
          </DateWrapper>
          <ButtonWrap>
            <ButtonForm type="submit">Criar</ButtonForm>
          </ButtonWrap>
        </form>
      </CustomModal>
    </>
  );
};

export default ModalNewActivity;

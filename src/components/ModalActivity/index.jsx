import React, { useState } from "react";
import {
  CustomModal,
  Activity,
  InfoModal,
  ButtonWrap,
  ButtonForm,
  InputModal,
  DateWrapper,
} from "./styles";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { notification } from "antd";
import { FaGrinAlt, FaTimes, FaTrashAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useActivities } from "../../providers/GroupActivities";

const FormEditActivity = ({ activity, date, closeModal, groupId }) => {
  const [deleteScreenActivity, setDeleteScreenActivity] = useState(false);

  const schema = yup.object().shape({
    title: yup.string().required("Todos os campos são obrigatórios"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { updateActivity, deleteActivity } = useActivities();

  const submitForm = async ({title}) => {
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

    await updateActivity(activity.id, {title}, groupId);
    closeModal()
  };

  const submitDelete = () => {
    deleteActivity(activity.id, groupId);
    closeModal()
  }
 
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <InputModal>
        <input
          type="text"
          placeholder="Qual a atividade?"
          {...register("title", { value: activity.title })}
          required
        />
      </InputModal>
      <DateWrapper>
        <p>
          Cumprir até: <span>{date}</span>
        </p>
      </DateWrapper>
      <ButtonWrap>
        {deleteScreenActivity ? (
          <>
            <ButtonForm type="button" onClick={() => setDeleteScreenActivity(false)}>Voltar</ButtonForm>
            <ButtonForm type="button" delete onClick={submitDelete}>Confirmar <FaTrashAlt /></ButtonForm>
          </>
        ) : (
          <>
            <ButtonForm type="button" onClick={() => setDeleteScreenActivity(true)} delete>Excluir</ButtonForm>
            <ButtonForm type="submit">Salvar</ButtonForm>
          </>
        )}
      </ButtonWrap>
    </form>
  );
};

const ModalActivity = ({ activity, groupId }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [edit, setEdit] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setEdit(false)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEdit(false)
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const timestamp = new Date(activity.realization_time).getTime();
  const now = new Date().getTime();
  const date = format(parseISO(activity.realization_time), "dd MMM yyyy", {
    locale: ptBR,
  });

  return (
    <>
      <Activity
        isActive={timestamp - now < 0 ? true : false}
        onClick={showModal}
      >
        <h2>{activity.title}</h2>
        <p>
          Cumprir até: <span>{date}</span>
        </p>
      </Activity>

      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={500}
        title={`${activity.title}`}
        okText="Criar"
        cancelText="Cancelar"
        closeIcon={<FaTimes />}
        footer={null}
      >
        {isModalVisible && edit ? (
          <FormEditActivity activity={activity} closeModal={handleOk} date={date} groupId={groupId}/>
        ) : (
          <InfoModal>
            <h2>{activity.title}</h2>
            <p>
              Cumprir até: <span>{date}</span>
            </p>

            <ButtonWrap>
              <ButtonForm type="button" onClick={handleEdit}>
                Editar
              </ButtonForm>
            </ButtonWrap>
          </InfoModal>
        )}
      </CustomModal>
    </>
  );
};

export default ModalActivity;

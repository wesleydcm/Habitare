import React, { useState } from "react";
import Button from "../Button";
import "antd/dist/antd.css";
import {  FaTimes } from "react-icons/fa";
import {
  CustomModal,
} from "./styles";
import FormNewGroup from "../FormNewGroup";


const NewGroup = () => {
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
       { isModalVisible && <FormNewGroup closeModal={handleOk} isModalVisible={isModalVisible}/> }
      </CustomModal>
    </>
  );
};

export default NewGroup;

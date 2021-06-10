import styled, { css } from "styled-components";
import { Modal } from "antd";
import Input from "../Input";

export const CustomModal = styled(Modal)`
  h3 {
    font-weight: bold;
    position: relative;

    bottom: 18px;
  }

  p {
    font-size: 13px;
  }

  .ant-modal-header {
    background-color: var(--white);
    border-radius: 15px;
  }

  .ant-modal-content {
    background-color: var(--white);
    border-radius: 15px;
  }

  .ant-modal-title {
    font-size: 24px;
    font-weight: bold;
  }

  .ant-modal-body {
    background-color: var(--gray);
    padding: 16px 24px;
  }

  .ant-modal-footer {
    background-color: var(--gray);
    border-radius: 15px;
  }

  .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cardContainer {
    display: flex;
    flex-flow: row wrap;
  }

  @media (min-width: 460px) {
    .ant-modal-title {
      font-size: 30px;
    }
  }
`;

export const InputModal = styled.input`
  border-radius: 18px;
  border: 2px solid var(--purple);

  color: var(--black);
  font-size: 16px;
  width: 250px;
  height: 20px;
  padding: 20px 12px;

  @media (min-width: 800px) {
    font-size: 20px;
    height: 22px;
    width: 250px;
    padding: 8px 16px;
  }
`;

export const CardCategory = styled.div`
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  margin: 4px;
  border-radius: 30px;
  padding: 2px 0;

  p {
    font-size: 10px;
    color: var(--white);
    text-align: center;
  }
`;

export const CardFrequency = styled.div`
  background: var(--purple);
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 53px;
  height: 30px;
  margin: 4px;
  border-radius: 30px;
  padding: 2px 0;

  p {
    font-size: 10px;
    color: var(--white);
    text-align: center;
  }
`;

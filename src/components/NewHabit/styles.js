import styled from "styled-components";
import { Modal } from "antd";
import React from "react";

export const CustomModal = styled(Modal)`
  h3 {
    font-weight: bold;
    position: relative;
    bottom: 18px;
  }

  p {
    font-size: 13px;
    margin-left: 8px;
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
    border-radius: 15px;
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

  @media (min-width: 430px) {
    p {
      font-size: 16px;
    }
  }

  @media (min-width: 460px) {
    .ant-modal-title {
      font-size: 30px;
    }
    p {
      margin: 5px 8px;
    }

    @media (min-width: 600px) {
      p {
        margin: 10px 8px;
      }
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

  @media (min-width: 540px) {
    font-size: 20px;
    width: 90%;
    padding: 25px 12px;
  }
`;

export const CardCategory = styled.label`
  background: ${(props) => props.color};
  justify-content: center;
  min-width: 90px;
  width: 46%;
  cursor: pointer;
  display: flex;
  position: absolute;
  z-index: 0;
  height: 30px;
  margin: 4px;
  border-radius: 30px;
  padding: 2px 0;
  filter: brightness(1);

  p {
    font-size: 10px;
    color: var(--white);
    text-align: center;
    font-weight: 500;
    margin: 0;
  }

  @media (min-width: 430px) {
    height: 40px;

    p {
      font-size: 14px;
    }
  }

  @media (min-width: 540px) {
    width: 31%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  div:hover {
    filter: brightness(0.9);
  }
`;

export const CardFrequency = styled.label`
  cursor: pointer;
  background: var(--purple);
  justify-content: center;
  min-width: 90px;
  width: 46%;
  cursor: pointer;
  display: flex;
  position: absolute;
  z-index: 0;
  height: 30px;
  margin: 4px;
  border-radius: 30px;
  padding: 2px 0;
  filter: brightness(1);

  &:hover {
    filter: brightness(0.9);
  }

  div:hover {
    filter: brightness(0.89);
  }
  p {
    font-size: 10px;
    color: var(--white);
    text-align: center;
    margin: 0;
  }

  @media (min-width: 430px) {
    height: 40px;

    p {
      font-size: 14px;
    }
  }
`;
export const WrapStars = styled.div`
  width: 100%;
  display: flex;

  img {
    cursor: pointer;
  }
`;

export const ButtonForm = styled.button`
  width: 100px;
  border-radius: 20px;
  background-color: var(--white);
  border: 1px solid var(--purple);
  margin: 40px auto;

  &:hover {
    filter: brightness(0.85);
  }

  &:last-child {
    background-color: var(--purple);
  }

  color: var(--purple);
  font-weight: bold;
  text-transform: uppercase;

  &:last-child {
    color: var(--white);
  }

  @media (min-width: 600px) {
    width: 150px;
  }
`;

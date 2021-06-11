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
    margin: 5px 3px;
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
    padding: 20px;
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

      .ant-modal-body {
        padding: 40px;
      }
    }
  }
`;

export const InputModal = styled.input`
  border-radius: 18px;
  border: 2px solid var(--purple);

  color: var(--black);
  font-size: 16px;
  width: 100%;
  height: 20px;
  padding: 20px 12px;

  @media (min-width: 540px) {
    font-size: 20px;

    padding: 25px 0;
  }
`;

export const CardCategory = styled.label`
  background: var(--white);
  border: 2px solid ${(props) => props.color};
  justify-content: center;

  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;

  margin: 4px;
  border-radius: 30px;
  padding: 18px 0;
  filter: brightness(1);

  p {
    font-size: 12px;
    margin: 0;
  }

  @media (min-width: 430px) {
    height: 40px;
  }

  @media (min-width: 460px) {
    width: 100%;
    max-width: 198px;

    margin: 0;

    @media (min-width: 630px) {
      p {
        font-size: 14px;
      }
    }
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
  background: var(--white);
  border: 2px solid var(--purple);
  justify-content: center;

  width: 95%;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 0;
  height: 30px;

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
    color: var(--purple);
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
`;

export const StartsInput = styled.img`
  cursor: pointer;

  display: flex;
  position: absolute;

  z-index: 0;
`;

export const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonForm = styled.button`
  width: 50%;
  border-radius: 20px;

  margin: 20px 0;
  padding: 4px 0;
  &:hover {
    filter: brightness(0.85);
  }

  background-color: var(--purple);

  color: var(--purple);
  font-weight: bold;
  text-transform: uppercase;

  color: var(--white);

  @media (min-width: 440px) {
    width: 150px;
    padding: 8px 0;
  }
`;

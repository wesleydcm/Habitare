import styled from "styled-components";
import { Modal } from "antd";

export const CustomModal = styled(Modal)`
  h3 {
    font-weight: bold;
    position: relative;
    bottom: 18px;
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

  @media (min-width: 460px) {
    .ant-modal-title {
      font-size: 30px;
    }

    @media (min-width: 600px) {
      .ant-modal-body {
        padding: 28px;
      }
    }
  }
`;

export const Activity = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6px 12px;
  opacity: ${(props) => (props.isActive ? ".4" : "1")};
  cursor: pointer;
  transition: all 350ms;

  h2 {
    font-weight: 700;
    font-size: 22px;
  }

  p {
    font-size: 20px;
  }

  &:hover {
    background-color: var(--gray);
  }
`;

export const InfoModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 22px;
  }

  p {
    font-size: 20px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonForm = styled.button`
  border-radius: 20px;

  margin: 20px 0 0;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 4px;
  }

  padding: 4px 0;
  &:hover {
    filter: brightness(0.92);
  }

  background-color: ${props => props.delete ? "var(--pink)" : "var(--purple)"};

  color: var(--purple);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  color: var(--white);

  @media (min-width: 440px) {
    width: 150px;
    padding: 4px 0;
  }
`;

export const InputModal = styled.div`
  input {
    border-radius: 18px;
    border: 3px solid var(--purple);

    color: var(--black);
    font-weight: 500;
    font-size: 16px;
    width: 100%;
    height: 20px;
    padding: 20px 12px;

    &::placeholder {
      font-weight: 300;
    }

    @media (min-width: 540px) {
      font-size: 20px;

      padding: 25px 12px;
    }
  }
`;

export const DateWrapper = styled.div`
  .ant-picker-focused {
    border-right-width: 3px !important;
  }

  p {
    margin-top: 12px;
    font-size: 20px;
  }
`;

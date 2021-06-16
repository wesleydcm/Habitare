import styled from "styled-components";
import { Modal } from "antd";

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
      font-size: 18px;
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
        margin: 18px 8px 10px;
      }

      .ant-modal-body {
        padding: 28px 40px;
      }
    }
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

export const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonForm = styled.button`
  width: 50%;
  border-radius: 20px;

  margin: 20px 0 0;
  padding: 4px 0;
  &:hover {
    filter: brightness(0.92);
  }

  background-color: var(--purple);

  color: var(--purple);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  color: var(--white);

  @media (min-width: 440px) {
    width: 150px;
    padding: 8px 0;
  }
`;

export const DateWrapper = styled.div`
.ant-picker-focused {
    border-right-width: 3px !important;
}
`;

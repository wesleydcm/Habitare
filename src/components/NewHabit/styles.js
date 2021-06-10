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

  .ant-btn {
    width: 100px;
    border-radius: 20px;
    background-color: var(--white);
    border: 1px solid var(--purple);
    margin: 0 auto;

    &:hover {
      filter: brightness(0.85);
    }
  }

  .ant-btn:last-child {
    background-color: var(--purple);
  }

  .ant-btn span {
    color: var(--purple);
    font-weight: bold;
    text-transform: uppercase;
  }

  .ant-btn:last-child span {
    color: var(--white);
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

      .ant-btn {
        width: 150px;
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 620px;
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

export const CardCategory = styled.div`
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46%;
  height: 30px;
  margin: 4px;
  border-radius: 30px;
  padding: 2px 0;
  filter: brightness(0.7);
  cursor: pointer;
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
  justify-content: space-between;

  div:hover {
    filter: brightness(0.9);
  }
`;

export const CardFrequency = styled.div`
  cursor: pointer;
  background: var(--purple);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 30px;
  margin: 4px;
  border-radius: 30px;
  padding: 2px 0;
  filter: brightness(0.7);

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

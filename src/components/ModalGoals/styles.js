import styled from "styled-components";
import { Modal } from "antd";

import StarImage from '../../assets/svg/emptyStar.svg'


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
    padding: 8px 12px 18px;
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

export const Goal = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  cursor: pointer;
  padding: 8px 12px;
  border-bottom: 2px solid var(--gray);
  transition: all 350ms;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: var(--gray);
  }

  h2 {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 4px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 6px 0 12px;
    font-size: 24px;

    svg {
      fill: var(--yellow);
    }
  }
`;

export const InfoHowMuchAchieved = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 32px;
  border: 2px solid
    ${(props) =>
      props.category === "spirit"
        ? "var(--colorSpirit)"
        : props.category === "money"
        ? "var(--colorMoney)"
        : props.category === "house"
        ? "var(--colorHouse)"
        : props.category === "night"
        ? "var(--colorNight)"
        : props.category === "fit"
        ? "var(--colorFit)"
        : props.category === "focus"
        ? "var(--colorFocus)"
        : "var(--load)"};
  position: relative;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.howMuchAchieved}%;
    max-width: 100%;
    height: 100%;
    border-radius: 32px;
    background-color: ${(props) =>
      props.category === "spirit"
        ? "var(--colorSpirit)"
        : props.category === "money"
        ? "var(--colorMoney)"
        : props.category === "house"
        ? "var(--colorHouse)"
        : props.category === "night"
        ? "var(--colorNight)"
        : props.category === "fit"
        ? "var(--colorFit)"
        : props.category === "focus"
        ? "var(--colorFocus)"
        : "var(--load)"};
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

export const DificultyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 48px;
  position: relative;
  justify-content: flex-start;
  background: url(${StarImage});
  background-size: 40px;
  background-position: center top;
  background-repeat: no-repeat;

  p {
    position: relative;
    top: 20px;
  }

  @media (min-width: 440px) {
    p {
      position: relative;
      top: 30px;
    }
  }
`;

export const RadioButtonDificulty = styled.input`
  position: relative;
  opacity: 0;
  z-index: 205;
  cursor: pointer;
  min-width: 50px;

  height: 50px;
  margin-right: 20px;
`;
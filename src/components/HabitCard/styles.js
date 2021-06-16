import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  min-height: 140px;
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
      : props.category === "focus" && "var(--colorFocus)"};
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  padding: 12px 8px;
  overflow: hidden;
  cursor: pointer;
  &:hover .lottie {
    opacity: 0.4;
  }
`;

export const HabitInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  position: relative;
  z-index: 350;
  h2 {
    font-weight: 700;
    font-size: 24px;
    color: var(--white);
    text-align: right;
    margin-bottom: 4px;
  }

  h3 {
    font-weight: 400;
    font-size: 20px;
    color: var(--white);
    text-align: right;
    display: flex;
    align-items: center;
    margin-bottom: 4px;

    svg {
      width: 18px;
      height: 18px;
      fill: var(--white);
      margin-right: 6px;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 6px;

    svg {
      fill: var(--white);
      margin-left: 6px;
    }
  }
`;

export const InfoHowMuchAchieved = styled.div`
  width: 70%;
  height: 10px;
  border-radius: 32px;
  border: 2px solid var(--white);
  position: relative;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.howMuchAchieved}%;
    max-width: 100%;
    height: 100%;
    border-radius: 32px;
    background-color: var(--white);
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -18%;
  left: -10px;
  opacity: 0.3;
  z-index: 300;
  transform: ${(props) =>
    props.category === "fit"
      ? "scaleX(-1) translateX(80px)"
      : props.category === "spirit"
      ? "translate(-30px, 5px)"
      : props.category === "focus"
      ? "translate(-17px, -1px) scale(.9)"
      : props.category === "house"
      ? "translate(-10px, 0px)"
      : props.category === "money"
      ? "translate(-15px, 0px)"
      : "scale(1)"};
  transition: opacity 300ms;

  > div {
    width: ${(props) =>
      props.category === "fit" ? "250px !important" : "200px !important"};
    height: 190px !important;
  }
`;

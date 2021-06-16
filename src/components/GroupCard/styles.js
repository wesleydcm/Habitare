import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  min-height: 100px;
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
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  padding: 12px 8px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 12px;
  &:hover .lottie {
    opacity: 0.4;
  }
`;

export const GroupInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 350;

  h2 {
    font-weight: 700;
    font-size: 22px;
    color: var(--white);
    text-align: right;
    margin-bottom: 4px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: var(--white);
    text-align: center;
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

  @media screen and (min-width: 540px) {
    h2 {
      font-size: 24px;
      margin-right: 10%;
    }

    h3 {
      margin-left: 20%;
    }
  }

  @media screen and (min-width: 1080px) {
    h3 {
      margin-left: 40%;
    }
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -18%;
  left: -10px;
  opacity: 0.1;
  z-index: 300;
  transform: ${(props) =>
    props.category === "fit"
      ? "scaleX(-1) translateX(10px)"
      : props.category === "spirit"
      ? "translate(-10px, 1-5px) scale(1.1)"
      : props.category === "focus"
      ? "translate(10px, -1px) scale(1)"
      : props.category === "house"
      ? "translate(-10px, 0px)"
      : props.category === "money"
      ? "translate(-15px, 0px)"
      : "scale(1)"};
  transition: opacity 300ms;

  > div {
    width: ${(props) =>
      props.category === "fit" ? "250px !important" : "200px !important"};
    height: 120px !important;
  }

  @media screen and (min-width: 940px) {
    opacity: 0.3;
  }
`;

import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 140px;
  background-color: ${(props) =>
    props.category === "spirit"
      ? "var(--colorSpitit)"
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
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
export const FiltersContent = styled.section`
  display: flex;
  gap: 12px;
`;
export const IconDisplayAll = styled.div`
  height: 30px;
  width: 30px;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.5px;
  &:hover {
    filter: brightness(0.9);
  }
`;
export const SvgContent = styled.div`
  width: 15px;
  height: 15px;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${(props) =>
      props.color === "spirit"
        ? "var(--colorSpirit)"
        : props.color === "fit"
        ? "var(--colorFit)"
        : props.color === "focus"
        ? "var(--colorFocus)"
        : props.color === "money"
        ? "var(--colorMoney)"
        : props.color === "house"
        ? "var(--colorHouse)"
        : "var(--colorNight)"};
    stroke-width: 21;

    color: ${(props) =>
      props.color === "spirit" && props.filterSelect
        ? "var(--colorSpirit)"
        : props.color === "fit" && props.filterSelect
        ? "var(--colorFit)"
        : props.color === "focus" && props.filterSelect
        ? "var(--colorFocus)"
        : props.color === "money" && props.filterSelect
        ? "var(--colorMoney)"
        : props.color === "house" && props.filterSelect
        ? "var(--colorHouse)"
        : props.color === "night" && props.filterSelect
        ? "var(--colorNight)"
        : "var(--white)"};
  }
`;
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 30px;
  width: 26px;
  cursor: pointer;
  outline: none;
  overflow: visible;
  &:hover {
    filter: brightness(0.85);
  }

  svg {
    width: 100%;
    height: 100%;

    path {
      stroke: ${(props) =>
        props.color === "spirit"
          ? "var(--colorSpirit)"
          : props.color === "fit"
          ? "var(--colorFit)"
          : props.color === "focus"
          ? "var(--colorFocus)"
          : props.color === "money"
          ? "var(--colorMoney)"
          : props.color === "house"
          ? "var(--colorHouse)"
          : "var(--colorNight)"};
      stroke-width: 21;

      color: ${(props) =>
        props.color === "spirit" && props.filterSelect
          ? "var(--colorSpirit)"
          : props.color === "fit" && props.filterSelect
          ? "var(--colorFit)"
          : props.color === "focus" && props.filterSelect
          ? "var(--colorFocus)"
          : props.color === "money" && props.filterSelect
          ? "var(--colorMoney)"
          : props.color === "house" && props.filterSelect
          ? "var(--colorHouse)"
          : props.color === "night" && props.filterSelect
          ? "var(--colorNight)"
          : "var(--white)"};
    }
  }

  @media screen and (min-width: 300px) {
    width: 30px;
  }
`;

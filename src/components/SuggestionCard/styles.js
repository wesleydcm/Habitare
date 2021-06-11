import styled from "styled-components";

export const CardContainer = styled.div`
     width: 100%;
  min-height: 100px;
  background-color: ${(props) => props.categoryColor };
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

export const SuggestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  position: relative;
  z-index: 350;

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: var(--white);
    text-align: right;
    margin-bottom: 8px;
  }

  h3 {
    font-weight: 400;
    font-size: 18px;
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

`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -18%;
  left: -10px;
  opacity: 0.3;
  z-index: 300;
  transform: ${(props) =>
    props.category === "fit"
      ? "scaleX(-1) translateX(60px)"
      : props.category === "spirit"
      ? "translate(-30px, 10px)"
      : props.category === "focus"
      ? "translate(-10px, 5px) scale(.9)"
      : props.category === "house"
      ? "translate(-10px, 10px)"
      : props.category === "money"
      ? "translate(-15px, 8px)"
      : "scale(1)"};
  transition: opacity 300ms;

  > div {
    width: ${(props) =>
      props.category === "fit" ? "200px !important" : "150px !important"};
    height: 120px !important;
  }
`;

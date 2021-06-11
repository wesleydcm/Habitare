import styled from "styled-components";

import { CardCategory, CardFrequency } from "./styles";

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  flex-flow: row wrap;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  justify-content: space-between;
  width: 50%;

  @media (min-width: 480px) {
    width: 33%;
  }
`;

export const CustomText = styled.p`
  color: ${(props) => props.color};
  z-index: 20;
  position: absolute;
  margin: 0;
  font-size: 10px;
  text-align: center;
  font-weight: 500;
`;

export const RadioButton = styled.input`
  position: relative;
  opacity: 0;
  z-index: 205;
  cursor: pointer;

  width: 100%;
  height: 25px;

  &:hover ~ ${CardCategory} {
    filter: brightness(0.85);
  }
  &:checked + ${CardCategory} {
    background: ${(props) => props.color};

    p {
      color: var(--white);
    }
  }

  @media (min-width: 460px) {
    width: 100%;
    max-width: 198px;
  }
`;
export const RadioButtonFrequency = styled.input`
  position: relative;
  opacity: 0;
  z-index: 205;
  cursor: pointer;

  width: 100%;
  height: 25px;

  &:hover ~ ${CardFrequency} {
    background: #ccc;
  }
  &:checked + ${CardFrequency} {
    background: var(--purple);

    p {
      color: var(--white);
    }
  }
`;

export const DificultyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 48px;
  position: relative;
  justify-content: flex-start;

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

  &:hover ~ ${CardFrequency} {
    background: #ccc;
  }
  &:checked + ${CardFrequency} {
    background: black;
  }
`;

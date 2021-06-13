import styled, { css, keyframes } from "styled-components";

export const InputItem = styled.input`
  border-radius: 26px;
  border: 2px solid var(--purple);
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--colorFocus-hover);
    `}
  color: var(--black);
  font-size: 16px;
  width: 100%;
  /* height: 20px; */
  padding: 8px 16px;

  @media (min-width: 800px) {
    font-size: 20px;
    /* height: 22px; */
    width: 100%;
    padding: 8px 16px;
  }
`;

const opacityAppear = keyframes`
from{
    opacity: 0;
}

to{
    opacity: 1;
}`;

export const ErrorSpan = styled.span`
  position: absolute;
  top: -1.2rem;
  font-size: 14px;
  color: var(--colorFocus-hover);
  animation: ${opacityAppear} 0.5s;
`;

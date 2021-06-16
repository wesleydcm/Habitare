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
  animation-name: ${(props) => props.errored && "error"};
  animation-duration: 0.075s;
  animation-iteration-count: 5;
  animation-direction: alternate;
  animation-fill-mode: backwards;

  @media (min-width: 800px) {
    font-size: 20px;
    /* height: 22px; */
    width: 100%;
    padding: 8px 16px;
  }

  @keyframes error {
    from {
      transform: translateX(-10px);
    }
    to {
      transform: translateX(10px);
    }
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
  top: 41px;
  font-size: 14px;
  color: var(--colorFocus-hover);
  animation: ${opacityAppear} 0.5s;
`;

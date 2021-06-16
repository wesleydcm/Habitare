import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;
  z-index: 500;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 95vw;
  max-width: 300px;
  max-height: 661px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translateY(-45px);
  > h1 {
    font-size: 32px;
    font-weight: bold;
    align-self: center;
    margin-bottom: 20px;
  }

  > div > input {
    font-size: 16px;
    margin-bottom: 20px;
  }
  > p {
    font-size: 16px;
    margin-bottom: 20px;

    a {
      font-weight: 700;

      &:hover {
        color: var(--purple-hover);
      }
    }
  }
  > div > button {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const Background = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 400;

  svg {
    width: 100vmin;
    object-fit: cover;
    transition: all 300ms;
    opacity: 0;

    &.left {
      position: absolute;
      left: -420px;
      top: 0;
    }

    &.right {
      position: absolute;
      right: -440px;
      bottom: -150px;
    }

    &.bottom {
      position: absolute;
      left: 50%;
      transform: translate(-56%, 0);
      bottom: -210px;
    }
  }
`;

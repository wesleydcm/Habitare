import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 42px auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin: 0 8px;
      background-color: var(--pink);

      &:nth-child(1) {
          animation: load .6s 0s infinite alternate-reverse;
      }

      &:nth-child(2) {
          animation: load .6s .2s infinite alternate-reverse;
      }

      &:nth-child(3) {
          animation: load .6s .4s infinite alternate-reverse;
      }
    }
  }

  @keyframes load {
      0% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(10px);
      }
  }
`;

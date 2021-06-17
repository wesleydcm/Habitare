import styled from "styled-components";
// import backgroundVector from "../../assets/vetorSignUpLogin.png";

export const Container = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;
  z-index: 500;
  min-height: 450px;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 95vw;
  max-width: 300px;
  min-height: 500px;
  max-height: 661px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  /* transform: translateY(-45px); */


    > h1 {
      font-size: 32px;
      font-weight: bold;
      align-self: center;
      margin-bottom: 20px;
    }

    > div > input {
      font-size: 16px;
      margin-bottom: 22px;
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
      left: -310px;
      bottom: -200px;
    }

    &.right {
      position: absolute;
      right: -320px;
      top: 0;
    }

    &.bottom {
      position: absolute;
      left: 50%;
      bottom: -210px;
      transform: translate(-46%, 0);
    }
  }

  @media screen and (min-width: 540px) {
    svg {
      width: 90vmin;
      object-fit: cover;

      &.left {
        position: absolute;
        left: -400px;
        bottom: -150px;
      }

      &.right {
        position: absolute;
        right: -380px;
        top: 0;
      }

      &.bottom {
        position: absolute;
        left: 50%;
        bottom: -210px;
        transform: translate(-46%, 0);
      }
    }
  }
`;

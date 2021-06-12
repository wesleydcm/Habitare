import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
`;

export const Content = styled.div`
  min-width: 280px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95vw;
    transition: all 350ms;

    h1 {
      font-size: 48px;
      font-weight: 800;
      margin-bottom: 12px;
      transition: all 350ms;

    }

    h2 {
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 16px;
      text-align: center;
      transition: all 350ms;

    }

    p {
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 16px;
      text-align: center;
      transition: all 350ms;

    }
  }

  @media screen and (min-width: 540px) {
    min-width: 280px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    div {
      min-width: 270px;
      width: 70%;
      max-width: 590px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 80px;
        font-weight: 800;
        margin-bottom: 12px;
      }

      h2 {
        font-size: 48px;
        font-weight: 800;
        margin-bottom: 16px;
        text-align: center;
      }

      p {
        font-size: 24px;
        font-weight: 300;
        margin-bottom: 16px;
        text-align: center;
      }
    }
  }

  @media screen and (min-width: 940px) {
    min-width: 280px;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    div {
      min-width: 270px;
      width: 70%;
      max-width: 590px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 80px;
        font-weight: 800;
        margin-bottom: 12px;
      }

      h2 {
        font-size: 48px;
        font-weight: 800;
        margin-bottom: 16px;
        text-align: center;
      }

      p {
        font-size: 24px;
        font-weight: 300;
        margin-bottom: 16px;
        text-align: center;
      }
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 95vw;
  height: 100vh;
  opacity: .5;
  z-index: -1;
  transition: all 350ms;

  .back {
    position: absolute;
    left: 0px;
    top: -200px;
    /* height: 100%; */
  }

  div {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 950px;
  }

  svg.left {
    position: absolute;
    top: 420px;
    left: 347px;
  }

  svg.right {
    position: absolute;
    top: 470px;
    left: 610px;
  }

  svg.tomada-bottom {
    position: absolute;
    bottom: -80px;
    left: 247px;
  }

  svg.tomada-top {
    position: absolute;
    z-index: 500;
    top: 180px;
    left: 465px;
  }

  @media screen and (min-width: 769px) {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 60vw;
    height: 100vh;
    opacity: 1;
  }
`;

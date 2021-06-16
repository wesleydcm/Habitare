import styled from "styled-components";

export const DashboardContainer = styled.main`
  padding-top: 140px;
  padding-bottom: 32px;
  padding-right: 12px;
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 720px) {
    padding-top: 32px;
    padding-left: calc(275px + 32px);
    padding-right: 32px;
  }
`;

export const MainCard = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 200px;
  background: linear-gradient(84.94deg, #a331b4 -21.8%, #7a5aed 98.1%);
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  padding: 24px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 8px;
    position: relative;
    z-index: 350;
  }

  h3 {
    color: var(--white);
    font-size: 20px;
    font-weight: 300;
    position: relative;
    z-index: 350;
  }

  @media screen and (min-width: 720px) {
    height: 230px;

    h1 {
      font-size: clamp(28px, 8px + 2.5vw, 48px);
    }

    h3 {
      font-size: 24px;
    }
  }
  @media screen and (min-width: 1140px) {
    h1 {
      font-size: 42px;
    }

    h3 {
      font-size: 36px;
    }
  }
`;

export const ImageMainCard = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  opacity: 0.2;
  z-index: 300;
  transition: all 300ms;

  > div {
    height: 200px !important;
    width: 250px !important;
  }

  @media screen and (min-width: 720px) {
    top: 50%;
    right: 0;

    > div {
      height: 250px !important;
      width: 310px !important;
    }
  }

  @media screen and (min-width: 1140px) {
    top: 50%;
    right: 0;
    opacity: 0.9;

    > div {
      height: 250px !important;
      width: 400px !important;
    }
  }
`;

export const FiltersAndButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin-top: 32px;
  > div {
    margin-bottom: 18px;

    &:first-child {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1375px) {
    > div {
      margin-bottom: 0px;
    }
  }
  button {
    z-index: 0;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  button {
    width: 100%;
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 540px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: auto;

    button {
      font-size: 18px;

      margin-right: 12px;
      width: auto;
      margin-right: 12px;
      margin-bottom: 0px;
    }
  }
`;

export const CardsList = styled.div`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 18px;
  margin: 32px auto;
  position: relative;

  @media screen and (min-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const NewProfile = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 22px;
    font-weight: 300;
    text-align: center;
  }
`;

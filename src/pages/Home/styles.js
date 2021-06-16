import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  overflow-x: hidden;
`;

export const FirstSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const PresentationWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 90px);
  min-height: 300px;
  padding: 0 12px;

  > div:first-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
      font-size: 34px;
      font-weight: 800;
      line-height: 38px;
      margin-bottom: 12px;
    }

    h2 {
      font-size: 22px;
      line-height: 32px;
      font-weight: 400;
    }
  }

  > div:last-child {
    display: none;

    div {
      width: 30vw !important;
      min-width: 250px;
    }
  }

  @media screen and (min-width: 325px) {
    > div:last-child {
      display: flex;
    }
  }

  @media screen and (min-width: 520px) {
    min-height: 300px;
    flex-direction: row;
  }

  @media screen and (min-width: 520px) and (min-height: 700px) {
    min-height: 700px;

    > div:first-child {
      max-width: 600px;

      h1 {
        font-size: 32px;
        line-height: 42px;
      }

      h2 {
        font-size: 22px;
        line-height: 36px;
      }
    }

    > div:last-child {
      div {
        width: 40vw !important;
        min-width: 275px;
      }
    }
  }

  @media screen and (min-width: 920px) {
    min-height: 700px;

    > div:first-child {
      h1 {
        font-size: 48px;
        line-height: 58px;
      }

      h2 {
        font-size: 26px;
        line-height: 36px;
      }
    }

    div {
      width: 40vw !important;
      min-width: 450px;
      max-width: 750px;
    }
  }
`;

export const SVGHomeTop = styled.div`
  position: absolute;
  top: -270px;
  left: -140px;
  width: 100vw;

  @media screen and (min-width: 325px) {
    top: -500px;
    left: -140px;
    width: 100vw;
  }

  @media screen and (min-width: 540px) and (min-height: 700px) {
    top: -200px;
    left: 0px;
    width: 100vw;
  }
`;

export const SVGHomeBottom = styled.div`
  position: absolute;
  bottom: -20px;
  left: -200px;
  right: 0;
  width: 100%;

  svg {
    min-width: 110vw;
    width: 1000px;
    max-height: 400px;
    object-fit: fill;
  }

  @media screen and (min-width: 350px) {
    bottom: -6px;
  }

  @media screen and (min-width: 520px) {
    bottom: -50px;
  }

  @media screen and (min-width: 520px) and (min-height: 700px) {
    bottom: -10px;
  }

  @media screen and (min-width: 780px) {
    bottom: -55px;
    left: -50px;
  }
`;

export const SecondSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--pink);
`;

export const HowItWorksWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: calc(85vh - 90px);
  padding: 0 18px;

  width: 95vw;
  max-width: 1280px;

  > div:first-child {
    text-align: center;
    margin-bottom: 36px;

    max-width: 800px;

    h2 {
      font-size: 32px;
      font-weight: 800;
      color: var(--white);
      margin-bottom: 18px;
    }

    p {
      color: var(--white);
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 18px;
    }
  }

  @media screen and (min-width: 540px) {
    > div:first-child {
      h2 {
        font-size: 38px;
      }

      p {
        font-size: 24px;
        line-height: 34px;
      }
    }
  }
`;

export const HowItWorksCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  margin-bottom: 48px;

  @media screen and (min-width: 780px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const HowItWorksCard = styled.div`
  background-color: rgba(244, 245, 246, 0.31);
  border-radius: 24px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;

  img {
    max-width: 100%;
    height: 200px;
  }

  div {
    margin: 12px 0;

    h3 {
      font-weight: 800;
      font-size: 26px;
    }

    p {
      margin: 6px 0;
      line-height: 28px;
    }
  }
`;

export const ThirtySection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color: ${(props) => props.categoryColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryContent = styled.div`
  margin: 0 18px;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0;

  div.infos-category {
    width: 100%;
    padding: 18px;

    h1 {
      display: flex;
      align-items: center;
      color: var(--white);
      font-weight: 800;
      font-size: 36px;
      margin-bottom: 18px;

      svg {
        margin-right: 18px;
      }
    }

    p {
      color: var(--white);
      font-weight: 400;
      font-size: 24px;
      line-height: 34px;
    }
  }

  div.image-category {
    display: none;
    width: 50% !important;

  }

  @media screen and (min-width: 760px) {
    div.infos-category {
      width: 50%;
    }

    div.image-category {
      display: flex;
    }
  }
`;

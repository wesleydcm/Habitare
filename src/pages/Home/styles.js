import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  overflow: hidden;
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
  height: calc(98vh - 90px);
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
  bottom: 0px;
  left: 0px;
  right: 0;
  width: 100%;

  svg {
    min-width: 110vw;
    width: 1000px;
    max-height: 400px;
    object-fit: fill;
  }

  .custom-shape-divider-bottom-1623850126 {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-bottom-1623850126 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 75px;
  }

  .custom-shape-divider-bottom-1623850126 .shape-fill {
    fill: #c45fd3;
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
  padding: 42px 18px 12px;

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
  min-height: 75vh;
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
  justify-content: space-evenly;
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
      font-size: 22px;
      line-height: 32px;
    }
  }

  div.image-category {
    display: none;
    width: ${(props) =>
      props.category === "night"
        ? "40% !important"
        : props.category === "focus" || props.category === "fit"
        ? "45% !important"
        : "50% !important"};
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

export const SVGBottomCategory = styled.div`
  position: absolute;
  bottom: 1px;
  left: 0px;
  right: 0;
  width: 100%;

  .custom-shape-divider-top-1623850440 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1623850440 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 104px;
  }

  .custom-shape-divider-top-1623850440 .shape-fill {
    fill: #6c5fd3;
  }
`;

export const FourthSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const DifficultyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 42px 18px 12px;
  position: relative;
  width: 95vw;
  max-width: 1280px;

  h1 {
    font-size: 34px;
    font-weight: 800;
    width: 95vw;
    max-width: 700px;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 18px;
  }

  > div {
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
    justify-content: space-around;
    min-height: 35vh;
    width: 100%;

    div.image {
      position: relative;
      width: 60%;
      min-height: 230px;
    }

    div.content {
      margin: 18px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        text-align: center;
        margin-bottom: 18px;
      }
    }
  }

  @media screen and (min-width: 780px) {
    h1 {
      font-size: 38px;
    }

    > div {
      flex-direction: row;

      div.content {
        width: 40%;
      }

      div.image {
        min-height: 300px;
      }
    }

    div {
      p {
        font-size: 24px;
      }
    }
  }

  @media screen and (min-width: 1080px) {
    > div {
      height: 58vh;
      min-height: 500px;
    }
  }
`;

export const SVGDifficultyWrapṕer = styled.div`
  position: absolute;
  bottom: -15px;
  left: 5px;
  width: 100%;
  min-width: 350px;
  max-width: 454px;

  @media screen and (min-width: 1080px) {
    max-width: 724px;
  }
`;

export const FifthSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--pink);
  border-top: 4px solid black;
`;

export const WhoDoesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 90px);
  padding: 42px 18px 12px;
  position: relative;
  width: 95vw;
  max-width: 1280px;

  h1 {
    font-size: 34px;
    font-weight: 800;
    width: 95vw;
    max-width: 600px;
    text-align: center;
    margin: 24px 0;
    color: var(--white);
  }

  p {
    font-size: 22px;
    color: var(--white);
    max-width: 900px;
    text-align: center;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 780px) {
    h1 {
      font-size: 38px;
    }
  }
`;

export const WhoDoesCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 32px 0 24px;

  @media screen and (min-width: 540px) {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 920px) {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
    margin: 52px 0 24px;
  }
`;

export const WhoDoesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    filter: grayscale(100) brightness(1.2) opacity(0.8);
    transition: all 300ms;
  }

  &:hover img {
    filter: grayscale(0) brightness(1.2) opacity(0.8);
  }

  > div:first-child {
    width: 143px;
    height: 143px;
    border: 5px solid var(--purple);
    border-radius: 50%;
  }

  h4 {
    font-size: 22px;
    font-weight: 700;
    color: var(--gray);
    margin: 8px 0;
  }

  > div div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 32px;

    a {
      color: var(--black);
      transition: all 350ms;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

import styled from "styled-components";

export const MainCardAchievements = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 200px;
  background: var(--pink);
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

export const AchievementsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: auto;
  @media screen and (min-width: 510px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
  @media screen and (min-width: 615px) {
    width: 600px;
  }
  @media screen and (min-width: 720px) {
    width: 100%;
  }
  @media screen and (min-width: 925px) {
    width: 600px;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
`;

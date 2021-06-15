import styled from "styled-components";

export const GroupContainer = styled.main`
  max-width: 100%;
  padding-top: 140px;
  padding-bottom: 32px;
  /* padding-right: 12px;
  padding-left: 12px; */

  display: grid;
  grid-template-columns: 1.5fr 1fr;
  justify-content: center;
  grid-gap: 24px;
  position: relative;

  @media screen and (min-width: 720px) {
    padding-top: 32px;
    padding-left: calc(275px + 32px);
    padding-right: 32px;
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const CardsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border: 3px solid
    ${(props) =>
      props.category === "spirit"
        ? "var(--colorSpirit)"
        : props.category === "money"
        ? "var(--colorMoney)"
        : props.category === "house"
        ? "var(--colorHouse)"
        : props.category === "night"
        ? "var(--colorNight)"
        : props.category === "fit"
        ? "var(--colorFit)"
        : props.category === "focus"
        ? "var(--colorFocus)"
        : "var(--load)"};
  border-radius: 24px;
  margin-bottom: 24px;
`;

export const HeaderCard = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px 20px 0 0;
  width: 100%;
  padding: 8px 18px;
  background-color: ${(props) =>
    props.category === "spirit"
      ? "var(--colorSpirit)"
      : props.category === "money"
      ? "var(--colorMoney)"
      : props.category === "house"
      ? "var(--colorHouse)"
      : props.category === "night"
      ? "var(--colorNight)"
      : props.category === "fit"
      ? "var(--colorFit)"
      : props.category === "focus"
      ? "var(--colorFocus)"
      : "var(--load)"};

  h4 {
    font-weight: 700;
    color: var(--white);
    display: flex;
    align-items: center;

    svg {
      margin-right: 6px;
    }
  }

  > svg {
    fill: var(--white);
    cursor: pointer;
  }
`;

export const InfoCard = styled(CardsContainer)`
  max-height: fit-content;

  > div {
    padding: 18px;
  }

  p {
    text-align: center;
    font-size: 22px;
    line-height: 28px;
    margin: 4px 0;
    font-weight: 500;
  }
`;

export const GoalsCard = styled(CardsContainer)`
  > div {
    padding: 12px 0 16px;

    > span {
      padding: 0 12px;
    }
  }
`;

export const Goal = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  cursor: pointer;
  padding: 8px 12px;
  border-bottom: 2px solid var(--gray);
  transition: all 350ms;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: var(--gray);
  }

  h2 {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 4px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 6px 0 12px;
    font-size: 24px;

    svg {
      fill: var(--yellow);
    }
  }
`;

export const InfoHowMuchAchieved = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 32px;
  border: 2px solid
    ${(props) =>
      props.category === "spirit"
        ? "var(--colorSpirit)"
        : props.category === "money"
        ? "var(--colorMoney)"
        : props.category === "house"
        ? "var(--colorHouse)"
        : props.category === "night"
        ? "var(--colorNight)"
        : props.category === "fit"
        ? "var(--colorFit)"
        : props.category === "focus"
        ? "var(--colorFocus)"
        : "var(--load)"};
  position: relative;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.howMuchAchieved}%;
    height: 100%;
    border-radius: 32px;
    background-color: ${(props) =>
      props.category === "spirit"
        ? "var(--colorSpirit)"
        : props.category === "money"
        ? "var(--colorMoney)"
        : props.category === "house"
        ? "var(--colorHouse)"
        : props.category === "night"
        ? "var(--colorNight)"
        : props.category === "fit"
        ? "var(--colorFit)"
        : props.category === "focus"
        ? "var(--colorFocus)"
        : "var(--load)"};
  }
`;

export const GroupTitleCard = styled.section`
  background-color: ${(props) =>
    props.category === "spirit"
      ? "var(--colorSpirit)"
      : props.category === "money"
      ? "var(--colorMoney)"
      : props.category === "house"
      ? "var(--colorHouse)"
      : props.category === "night"
      ? "var(--colorNight)"
      : props.category === "fit"
      ? "var(--colorFit)"
      : props.category === "focus"
      ? "var(--colorFocus)"
      : "var(--load)"};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 0 0 24px 24px;
  padding: 32px 12px;
  height: fit-content;
  transform: translateY(-32px);
  position: relative;
  overflow: hidden;
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 8px;
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
    color: var(--white);
    text-align: right;
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    svg {
      width: 18px;
      height: 18px;
      fill: var(--white);
      margin-right: 6px;
    }
  }

  button {
    padding: 4px 24px;
    background-color: var(--white);
    color: ${(props) =>
      props.category === "spirit"
        ? "var(--colorSpirit)"
        : props.category === "money"
        ? "var(--colorMoney)"
        : props.category === "house"
        ? "var(--colorHouse)"
        : props.category === "night"
        ? "var(--colorNight)"
        : props.category === "fit"
        ? "var(--colorFit)"
        : props.category === "focus"
        ? "var(--colorFocus)"
        : "var(--load)"};

    font-weight: 700;
    border-radius: 24px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0px;
  left: -10px;
  opacity: 0.3;
  z-index: 300;
  transform: ${(props) =>
    props.category === "fit"
      ? "scaleX(-1) translateX(50px)"
      : props.category === "spirit"
      ? "translate(-30px, 5px)"
      : props.category === "focus"
      ? "translate(-17px, -1px) scale(.9)"
      : props.category === "house"
      ? "translate(-10px, 0px)"
      : props.category === "money"
      ? "translate(-15px, 0px)"
      : "scale(1)"};
  transition: opacity 300ms;

  > div {
    width: ${(props) =>
      props.category === "fit" ? "250px !important" : "200px !important"};
    height: 190px !important;
  }
`;

export const UsersGroupCard = styled(CardsContainer)`
  height: 250px;
  width: 100%;

  > div {
    padding: 12px 0;

    ul {
      overflow-y: auto;
      height: 180px;

      li {
        font-weight: 500;
        padding: 4px;
        border-bottom: 2px solid var(--gray);
        padding: 8px 12px;
        transition: all 350ms;

        &:hover {
          background-color: var(--gray);
        }
      }
    }
  }
`;

export const ActivitiesCard = styled(CardsContainer)`
  > div {
    padding: 12px 0;

    > div {
      overflow-y: auto;
      height: 200px;
      padding: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Activity = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6px 12px;
  opacity: ${(props) => (props.isActive ? ".4" : "1")};
  cursor: pointer;
  transition: all 350ms;

  h2 {
    font-weight: 700;
    font-size: 22px;
  }

  p {
    font-size: 20px;
  }

  &:hover {
    background-color: var(--gray);
  }
`;

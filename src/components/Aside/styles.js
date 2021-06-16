import styled from "styled-components";

import curveTop from "../../assets/images/curve-top.png";
import curveBottom from "../../assets/images/curve-bottom.png";
import curveLeft from "../../assets/images/curve-left.png";
import curveRight from "../../assets/images/curve-right.png";

export const AsideContainer = styled.aside`
  width: 100%;
  height: 200px;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 400;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--purple);
  z-index: 500;
  
  @media screen and (min-width: 720px) {
    min-height: 100vh;
    width: 275px;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--purple);

    padding: 150px 12px 0;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
    border-radius: 50%;
    border: 3px solid var(--white);
    background-color: var(--white);
    margin-bottom: 14px;
  }

  h2 {
    color: var(--white);
    font-weight: 700;
    font-weight: 24px;
    margin-bottom: 8px;
    text-align: center;
  }

  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;

    img {
      width: 60%;
      border-radius: 50%;
      border: 3px solid var(--white);
      background-color: var(--white);
      margin-bottom: 22px;
    }

    h2 {
      color: var(--white);
      font-weight: 700;
      font-weight: 24px;
      margin-bottom: 12px;
      font-size: 24px;
    }
  }
`;

export const LevelInfo = styled.div`
  background-color: var(--gray);
  padding: 3px 12px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 500;

  span {
    text-transform: uppercase;
    color: var(--purple);
    font-size: 14px;
    font-weight: 700;
    margin-left: 8px;
    text-align: center;
  }

  svg {
    fill: #fbd437;
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 720px) {
    background-color: var(--gray);
    padding: 4px 18px;
    border-radius: 24px;
    display: flex;
    align-items: center;

    span {
      text-transform: uppercase;
      color: var(--purple);
      font-size: 18px;
      font-weight: 700;
      margin-left: 8px;
    }

    svg {
      fill: #fbd437;
      width: 32px;
      height: 32px;
    }
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  padding-right: 8px;
  padding-bottom: 12px;

  a {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0;
    position: relative;
    z-index: 450;
    padding: 0 6px 18px;
    margin-right: 8px;

    span {
      color: var(--white);
      font-weight: 600;
      font-size: 18px;
      display: none;
    }

    svg {
      fill: var(--white);
      margin-right: 0;
      width: 28px;
      height: 28px;
    }

    &.navlink--active {
      border-radius: 0;

      span {
        color: var(--purple);
      }

      svg {
        fill: var(--purple);
      }
    }
  }

  .indicator {
    position: absolute;
    left: ${(props) => props.leftIndicator};
    top: 20px;
    background-color: var(--gray);
    height: 100px;
    width: 40px;
    border-radius: 24px 24px 0 0;
    z-index: 420;
    transition: left 500ms;

    &::before {
      content: "";
      width: 18px;
      height: 28px;
      background-image: url(${curveLeft});
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      bottom: 0px;
      left: -16px;
    }

    &::after {
      content: "";
      width: 18px;
      height: 28px;
      background-image: url(${curveRight});
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      bottom: 0px;
      right: -15px;
    }
  }

  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: column;
    position: relative;
    height: inherit;
    padding-right: 0;
    padding-bottom: 0px;

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 8px 24px;
      position: relative;
      z-index: 450;
      margin-bottom: 18px;
      margin-right: 0px;

      span {
        font-size: 24px;
        color: var(--white);
        font-weight: 600;
        display: flex;
        align-items: center;
      }

      svg {
        fill: var(--white);
        margin-right: 8px;
      }

      &.navlink--active {
        border-radius: 24px 0 0 24px;

        svg {
          fill: var(--purple);
        }
      }
    }

    .indicator {
      position: absolute;
      left: 0;
      top: ${(props) => props.topIndicator};
      background-color: var(--gray);
      height: 45px;
      width: 250px;
      border-radius: 24px 0 0 24px;
      z-index: 420;
      transition: top 500ms;

      &::before {
        content: "";
        width: 38px;
        height: 24px;
        background-image: url(${curveTop});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: -22px;
        right: 7px;
        left: unset;
      }

      &::after {
        content: "";
        width: 38px;
        height: 22px;
        background-image: url(${curveBottom});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        bottom: -21px;
        right: 7px;
      }
    }
  }
`;

export const ButtonLogoffWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
  padding-top: 18px;

  @media screen and (min-width: 720px) {
    display: none;
  }
`;

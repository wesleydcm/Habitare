import styled from "styled-components";

import curveTopSvg from "../../assets/images/curve-top.svg";
import curveBottom from "../../assets/images/curve-bottom.svg";
import curveLeft from "../../assets/images/curve-left.svg";
import curveRight from "../../assets/images/curve-right.svg";

export const AsideContainer = styled.aside`
  width: 100%;
  height: 200px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 400;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--purple);
  z-index: 500;
  
  @media screen and (min-width: 720px) {
    height: 100vh;
    min-height: 660px;
    width: 275px;

    
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

  
  div.avatar {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      border: 3px solid var(--white);
      background: url(${props => props.avatar});
      background-color: var(--gray);
      background-size: cover;
      background-repeat: no-repeat;
      margin-bottom: 8px;
      cursor: pointer;
      position: relative;
      overflow: hidden;

      &::before {
        content: "Trocar";
        font-size: 14px;
        line-height: 32px;
        text-align: center;
        color: var(--white);
        width: 100%;
        height: 30%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0,0,0,0.4);
        opacity: 0;
        transition: 350ms;
      }

      &:hover::before {
        opacity: 1;
      }
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


    div.avatar {
      width: 135px;
      height: 135px;
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
        width: 39px;
        height: 24px;
        background-image: url(${curveTopSvg});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: -22px;
        right: 7px;
        left: unset;
      }

      &::after {
        content: "";
        width: 39px;
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

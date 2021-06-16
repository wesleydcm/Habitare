import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: var(--white);
  padding: 18px 8px;
  display: ${(props) =>
    props.location === "/" ||
    props.location === "/login" ||
    props.location === "/signup"
      ? "flex"
      : "none"};
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 700;

  img {
    width: 110px;
  }

  @media screen and (min-width: 720px) {
    width: 100%;
    background-color: var(--white);
    padding: 24px 48px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;

    img {
      width: 146px;
      height: 29px;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  button {
    font-size: 16px;
    padding: 4px 8px;
  }

  @media screen and (min-width: 720px) {
    button {
      font-size: inherit;
      padding: 6px 32px;
    }
  }
`;

import styled from "styled-components";

export const InputModal = styled.div`
  input {
    border-radius: 18px;
    border: 3px solid var(--purple);

    color: var(--black);
    font-weight: 500;
    font-size: 16px;
    width: 100%;
    height: 20px;
    padding: 20px 12px;

    &::placeholder {
      font-weight: 300;
    }

    @media (min-width: 540px) {
      font-size: 20px;

      padding: 25px 12px;
    }
  }
`;

export const CardCategory = styled.label`
  background: var(--white);
  border: 3px solid ${(props) => props.color};
  justify-content: center;

  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;

  margin: 4px;
  border-radius: 30px;
  padding: 18px 0;
  transition: all 300ms;

  p {
    font-size: 12px;
    font-weight: 600;
    margin: 0;
  }

  @media (min-width: 430px) {
    height: 40px;
  }

  @media (min-width: 460px) {
    width: 100%;
    max-width: 198px;

    margin: 0;

    @media (min-width: 630px) {
      p {
        font-size: 14px;
      }
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 6px;

  div {
    width: 100%;
    transition: all 200ms;
  }

  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const CardFrequency = styled.label`
  cursor: pointer;
  background: var(--white);
  border: 3px solid var(--purple);
  justify-content: center;

  width: 95%;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 0;
  height: 30px;

  border-radius: 30px;
  padding: 2px 0;
  filter: brightness(1);
  transition: all 300ms;

  &:hover {
    filter: brightness(0.92);
  }

  div:hover {
    filter: brightness(0.92);
  }

  p {
    font-size: 12px;
    color: var(--purple);
    text-align: center;
    margin: 0;
    font-weight: 600;
  }

  @media (min-width: 430px) {
    height: 40px;

    p {
      font-size: 16px;
    }
  }
`;
export const WrapStars = styled.div`
  width: 100%;
  display: flex;
`;

export const StartsInput = styled.img`
  cursor: pointer;

  display: flex;
  position: absolute;

  z-index: 0;
`;

export const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonForm = styled.button`
  width: 50%;
  border-radius: 20px;

  margin: 20px 0;
  padding: 4px 0;
  &:hover {
    filter: brightness(0.92);
  }

  background-color: var(--purple);

  color: var(--purple);
  font-weight: bold;
  text-transform: uppercase;

  color: var(--white);

  @media (min-width: 440px) {
    width: 150px;
    padding: 8px 0;
  }
`;

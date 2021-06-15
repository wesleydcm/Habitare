import styled from "styled-components";

export const AchievementBox = styled.div`
  width: 100%;

  height: 110px;
  margin: 10px 0;
  background-color: var(--purple);
  border-radius: 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 530px) {
    max-width: 49%;
    /* margin: 10px 5px; */
  }

  @media screen and (min-width: 720px) {
    max-width: 100%;
  }

  @media screen and (min-width: 860px) {
    max-width: 49%;
  }

  @media screen and (min-width: 1100px) {
    max-width: 31%;
  }
`;

export const ImgBadge = styled.img`
  height: 80px;
  width: 80px;
  margin: 5px;
  border-radius: 50%;
  border: 3px solid var(--white);
  background-color: #7f7f7f;
`;

export const TextBox = styled.div`
  text-align: center;
  h3 {
    margin: 3px;
    color: var(--white);
    font-weight: 500;
    font-variant: small-caps;
    font-size: 18px;
  }

  p {
    margin: 3px;
    color: var(--white);
    font-size: 13px;
    max-width: 200px;
  }

  @media screen and (min-width: 1100px) {
    h3 {
      font-size: 22px;
    }
  }
`;

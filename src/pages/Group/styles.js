import styled from "styled-components";

export const GroupContainer = styled.main`
  max-width: 100%;
  padding-top: 140px;
  padding-bottom: 32px;
  /* padding-right: 12px;
  padding-left: 12px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    margin-top: 32px;
    font-size: 28px;
    font-weight: 700;
  }

  > h3 {
    font-size: 20px;
    line-height: 30px;
    font-weight: 300;
    text-align: center;
    max-width: 700px;

    strong {
      font-weight: 500;
    }
  }

  @media screen and (min-width: 720px) {
    padding-top: 32px;
    padding-left: calc(275px + 32px);
    padding-right: 32px;
  }
`;
import styled from "styled-components";

export const GroupsContainer = styled.main`
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

export const FiltersAndButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  width: 90%;
  max-width: 1280px;

  > div {
    margin-bottom: 18px;

    &:first-child {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1375px) {
    > div {
      margin-bottom: 0px;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  button {
    width: 100%;
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;

    &:last-child{
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 540px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: auto;

    button {
    font-size: 18px;

      margin-right: 12px;
      width: auto;
      margin-right: 12px;
      margin-bottom: 0px;
    }
  }
`;

export const GroupsList = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 
`;

import styled from "styled-components";
import backgroundVector from "../../assets/vetorSignUpLogin.png";

export const Container = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${backgroundVector}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 428px;
  max-height: 661px;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    > h1 {
      font-size: 32px;
      font-weight: bold;
      align-self: center;
    }

    > input {
      font-size: 16px;
      height: 30px;
    }
    > p {
      font-size: 12px;
    }
    > button {
      align-self: flex-end;
      width: 150px;
    }
  }
`;

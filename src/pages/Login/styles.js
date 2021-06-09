import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FormContainer = styled.form`
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
`;

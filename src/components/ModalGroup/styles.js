import styled from "styled-components";
import { Modal } from "antd";

export const CustomModal = styled(Modal)`
  h3 {
    font-weight: bold;
    position: relative;
    bottom: 18px;
  }

  .ant-modal-header {
    background-color: var(--white);
    border-radius: 15px;
  }

  .ant-modal-content {
    background-color: var(--white);
    border-radius: 15px;
  }

  .ant-modal-title {
    font-size: 24px;
    font-weight: bold;
  }

  .ant-modal-body {
    background-color: var(--gray);
    border-radius: 15px;
    padding: 8px 12px 18px;
  }

  .ant-modal-footer {
    background-color: var(--gray);
    border-radius: 15px;
  }

  .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 460px) {
    .ant-modal-title {
      font-size: 30px;
    }
  }
`;

export const InfoModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 22px;
  }

  p {
    font-size: 20px;
  }
`;


export const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonForm = styled.button`
  border-radius: 20px;

  margin: 20px 0 0;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 4px;
  }

  padding: 4px 0;
  &:hover {
    filter: brightness(0.92);
  }

  background-color: ${props => props.delete ? "var(--pink)" : "var(--purple)"};

  color: var(--purple);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  color: var(--white);

  @media (min-width: 440px) {
    width: 150px;
    padding: 4px 0;
  }
`;

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

export const TextAreaModal = styled.div`
/* margin-top: 12px; */

label {
  font-size: 13px;
  margin: 5px 3px;
  display: block;
}

textarea {
  border-radius: 18px;
  border: 3px solid var(--purple);

  color: var(--black);
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  height: 100px;
  padding: 8px 12px;

  &::placeholder {
    font-weight: 300;
  }

  @media (min-width: 540px) {
    font-size: 20px;
  }
}

@media (min-width: 430px) {
  label {
    font-size: 18px;
  }
}

@media (min-width: 460px) {
  label {
    margin: 5px 8px;
  }
}
@media (min-width: 600px) {
  label {
    margin: 12px 8px 10px;
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

export const Item = styled.div`
display: flex;
align-items: center;
height: 48px;
position: relative;
justify-content: space-between;
width: 50%;

@media (min-width: 480px) {
  width: 33%;
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

export const CustomText = styled.p`
color: ${(props) => props.color};
z-index: 20;
position: absolute;
margin: 0;
font-size: 10px;
text-align: center;
font-weight: 500;
transition: all 300ms;
`;

export const RadioButton = styled.input`
position: relative;
opacity: 0;
z-index: 205;
cursor: pointer;
transition: all 300ms;

width: 100%;
height: 25px;

&:hover ~ ${CardCategory} {
  filter: brightness(0.92);
}

&:checked + ${CardCategory} {
  background: ${(props) => props.color};

  p {
    color: var(--white);
  }
}

@media (min-width: 460px) {
  width: 100%;
  max-width: 198px;
}
`;
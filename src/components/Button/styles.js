import styled from "styled-components";

export const ButtonItem = styled.button`
  border-radius: 26px;
  width: 166px;
  height: 44px;
  background-color: ${(props) => (props.whiteSchema ? "#FFFF" : "#7A5AED")};
  color: ${(props) => (props.whiteSchema ? "#7A5AED" : "#FFFF")};
  font-size: 20px;
  font-weight: 500;
  transition: 0.5s;

  :hover {
    background-color: ${(props) => (props.whiteSchema ? "#F4F5F6" : "#3814B8")};
    color: ${(props) => (props.whiteSchema ? "#3814B8" : "#F4F5F6")};
  }

  @media (min-width: 800px) {
    font-size: 28px;
    width: 230px;
    height: 60px;
  }
`;

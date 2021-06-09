import styled from "styled-components";

export const ButtonItem = styled.button`
  border-radius: 26px;
  background-color: ${(props) => (props.whiteSchema ? 'var(--white)' : 'var(--purple)')};
  color: ${(props) => (props.whiteSchema ? 'var(--purple)'  : 'var(--white)' )};
  font-size: 18px;
  font-weight: 500;
  transition: 300ms;
  border: 3px solid ${(props) => (props.whiteSchema ? 'var(--purple)' : 'transparent')};
  
  :hover {
    background-color: ${(props) => (props.whiteSchema ? "#F4F5F6" : 'var(--purple-hover)')};
    color: ${(props) => (props.whiteSchema ? 'var(--purple-hover)' : "#F4F5F6")};
  }

  @media (min-width: 800px) {
    font-size: 22px;
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    !!props.achieved ? "var(--purple)" : "var(--light-purple)"};

  width: 100%;
  border-radius: 18px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6%;

  @media (min-width: 800px) {
    border-radius: 26px;
    height: 102px;
  }
`;

export const Description = styled.span`
  font-size: 16px;
  opacity: 0.7;
  color: #dfdfdf;
  @media (min-width: 800px) {
    font-size: 20px;
  }
`;

export const Title = styled.h4`
  font-size: 20px;
  color: ${(props) => (!!props.achieved ? "var(--white)" : "#dfdfdf")};
  @media (min-width: 800px) {
    font-size: 24px;
  }
`;

export const Image = styled.img`
  width: 50px;
`;

export const Elipse = styled.div`
  border-radius: 50%;
  border: 4px dashed #dfdfdf;
  width: 50px;
  height: 50px;
`;

export const Info = styled.div`
  text-align: center;
`;

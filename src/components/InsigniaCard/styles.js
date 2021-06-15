import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    !!props.achieved ? "var(--purple)" : "var(--light-purple)"};

  width: 100%;

  height: 110px;
  margin: 10px 0;
  border-radius: 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 10px;
  min-width: 280px;

  @media screen and (min-width: 600px) {
    max-width: 35%;
    /* margin: 10px 5px; */
  }

  @media screen and (min-width: 720px) {
    max-width: 100%;
  }

  @media screen and (min-width: 900px) {
    max-width: 31%;
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 16px;
  opacity: 0.7;
  color: #dfdfdf;
  width: 200px;
`;

export const Title = styled.h4`
  font-size: 18px;
  margin-bottom: 0.3rem;
  color: ${(props) => (!!props.achieved ? "var(--white)" : "#dfdfdf")};
  max-width: 200px;
  width: 100%;
`;

export const Image = styled.img`
  min-width: 50px;
  width: 50px;

  @media (min-width: 800px) {
    width: 60px;
  }
`;

export const Elipse = styled.div`
  border-radius: 50%;
  border: 4px dashed #dfdfdf;
  min-width: 60px;
  width: 60px;
  height: 60px;
  min-height: 60px;
`;

export const Info = styled.div`
  text-align: center;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

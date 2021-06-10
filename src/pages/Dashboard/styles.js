import styled from "styled-components";

export const DashboardContainer = styled.main`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-right: 32px;
  padding-left: calc(275px + 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainCard = styled.div`
  width: 100%;
  max-width: 980px;
  height: 230px;
  background: linear-gradient(84.94deg, #a331b4 -21.8%, #7a5aed 98.1%);
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  padding: 24px;

  h1 {
    font-size: 42px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 8px;
  }

  h3 {
    color: var(--white);
    font-size: 36px;
    font-weight: 300;
  }
`;

export const ImageMainCard = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    > div {
      height: 250px !important;
      width: 400px !important;
    }
`;

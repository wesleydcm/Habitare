import Aside from "../../components/Aside";
import Lottie from 'react-lottie';

import animationData from '../../assets/lotties/main.json';

import { DashboardContainer, ImageMainCard, MainCard } from "./styles";

const Dashboard = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <>
      <Aside />
      <DashboardContainer>
        <MainCard>
          <h1>Olá, Kenzie Academy!</h1>
          <h3>Qual hábito quer começar hoje?</h3>
          <ImageMainCard>
            <Lottie options={lottieOptions} />
          </ImageMainCard>
        </MainCard>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

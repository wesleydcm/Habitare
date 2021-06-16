import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../providers/User";
import {
  FaCompressArrowsAlt,
  FaHands,
  FaHouseDamage,
  FaLeaf,
  FaMoneyBillWave,
  FaMoon,
} from "react-icons/fa";
import {
  CategoryContainer,
  CategoryContent,
  FirstSection,
  HomeContainer,
  HowItWorksCard,
  HowItWorksCards,
  HowItWorksWrapper,
  PresentationWrapper,
  SecondSection,
  SVGHomeBottom,
  SVGHomeTop,
  ThirtySection,
} from "./styles";
import Lottie from "react-lottie";

import animationData from "../../assets/lotties/home.json";
import SpiritLottie from "../../assets/lotties/spirit.json";
import FitLottie from "../../assets/lotties/fit.json";
import HouseLottie from "../../assets/lotties/house.json";
import MoneyLottie from "../../assets/lotties/money.json";
import NightLottie from "../../assets/lotties/night.json";
import FocusLottie from "../../assets/lotties/focus.json";

import HabitImage from "../../assets/svg/habits.svg";
import GroupsImage from "../../assets/svg/groups.svg";
import AchievementsImage from "../../assets/svg/achivements.svg";

const Home = () => {
  const { authenticated } = useContext(UserContext);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <HomeContainer>
      <FirstSection>
        <PresentationWrapper>
          <div>
            <h1>Tenha bons hábitos, voe rumo ao topo do seu potencial!</h1>
            <h2>
              Domine seus hábitos e construa a melhor versão de si mesmo no
              Habitare
            </h2>
          </div>
          <div>
            <Lottie
              options={{ ...lottieOptions, animationData: animationData }}
            />
          </div>
        </PresentationWrapper>
        <SVGHomeTop>
          <svg
            width="721"
            height="459"
            viewBox="0 0 721 459"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M136.522 330.218C136.522 413.141 41.3965 446.436 -6.16637 452.718V459L-113 398.064V-276H576.296V-125.231C583.126 -78.953 595.64 44.2241 667.764 74.5385C738.01 104.064 738.01 143.013 664.105 176.936C589.468 219.026 528.734 245.41 582.882 330.218C616.929 383.542 429.217 382.987 343.604 314.513C227.99 226.564 136.522 247.295 136.522 330.218Z"
              fill="#C45FD3"
            />
            <path
              d="M-40 347.388C11 392.888 104.31 397.682 165.5 344.388C243 276.888 236 241.888 294.5 241.888C367.515 241.888 440.65 315.971 486.5 326.888C560 344.388 608.1 298.982 592.5 248.582C576.9 198.182 597.24 157.699 636 108.5C682 50.1119 571.6 -62.2 530 -101C488.4 -139.8 730.167 -56.612 719.5 -63.112"
              stroke="#010B14"
              stroke-width="3"
            />
          </svg>
        </SVGHomeTop>

        <SVGHomeBottom>
          <svg
            viewBox="0 0 1624 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M160.549 112.23C98.5303 146.076 34.6773 137.991 10.5032 129.717H0V207H1624V112.23C1624 34.3832 1491.46 29.5883 1396.43 34.9473C1375.63 36.12 1260.89 49.332 1183.36 96.1529C1105.84 142.974 1030.32 78.6656 937.289 70.4861C844.26 62.3065 694.214 139.871 554.671 112.23C415.128 84.5888 507.156 14.3574 346.607 1.38294C186.057 -11.5915 238.073 69.922 160.549 112.23Z"
              fill="#C45FD3"
            />
          </svg>
        </SVGHomeBottom>
      </FirstSection>

      <SecondSection>
        <HowItWorksWrapper>
          <div>
            <h2>Como funciona?</h2>
            <p>
              Liste, organize, faça o check-in, encontre grupos de pessoas que
              estão no mesmo objetivo que você, se ajudem e desbloqueie
              conquistas!
            </p>
          </div>

          <HowItWorksCards>
            <HowItWorksCard>
              <img src={HabitImage} alt="Criando hábitos" />
              <div>
                <h3>1. Crie seus hábitos</h3>
                <p>
                  Faça uma lista de hábitos para criar sua nova rotina diária e
                  iniciar sua jornada rumo ao topo!
                </p>
              </div>
            </HowItWorksCard>
            <HowItWorksCard>
              <img src={GroupsImage} alt="Criando grupos" />
              <div>
                <h3>2. Crie metas em grupos</h3>
                <p>
                  Encontre pessoas que possuem o mesmo objetivo que você e se
                  ajudem nessa motivação.
                </p>
              </div>
            </HowItWorksCard>
            <HowItWorksCard>
              <img src={AchievementsImage} alt="Ganhando conquistas" />
              <div>
                <h3>3. Receba conquistas</h3>
                <p>
                  Cumpra seus hábitos como esperado, mantenha o Habitare
                  atualizado e seja recompensado!
                </p>
              </div>
            </HowItWorksCard>
          </HowItWorksCards>
        </HowItWorksWrapper>
      </SecondSection>
      <ThirtySection>
        <CategoryContainer categoryColor="var(--colorSpirit)">
          <CategoryContent>
            <div className="infos-category">
              <h1>
                <FaHands /> Corpo e mente saudáveis
              </h1>
              <p>
                Sabe aquele meditação no inicío da manhã que você sempre quis
                fazer e nunca se organizou para que acontecesse de fato?
                <br />
                No Habitare você encontrará a categoria CORPO E MENTE SAUDÁVEIS,
                onde poderá organizar seus hábitos em prol da sua saúde mental e
                espiritual.
              </p>
            </div>
            <div className="image-category">
              <Lottie
                options={{ ...lottieOptions, animationData: SpiritLottie }}
              />
            </div>
          </CategoryContent>
        </CategoryContainer>
        <CategoryContainer categoryColor="var(--colorMoney)">
          <CategoryContent>
            <div className="image-category">
              <Lottie
                options={{ ...lottieOptions, animationData: MoneyLottie }}
              />
            </div>
            <div className="infos-category">
              <h1>
                <FaMoneyBillWave /> Me poupe
              </h1>
              <p>
                Você é mais uma pessao que tem milhoes de sonhos, mas não
                consegue se organizar financeiramente para realiza-los? <br />
                Entre agora pro Habitare, liste os hábitos que você acredita
                serem imprecindiveis para este objetivo, os organize na
                categoria ME POUPE e veja sua evolução!
              </p>
            </div>
          </CategoryContent>
        </CategoryContainer>
        <CategoryContainer categoryColor="var(--colorFocus)">
          <CategoryContent>
            <div className="infos-category">
              <h1>
                <FaCompressArrowsAlt /> Foco, força e fé
              </h1>
              <p>
                Sabe aquela ideia que quer muito realizar mas nem você acredita
                que um dia vai conseguir tirar da sua cabeça? <br /> Tenha Foco
                Força e Fé que você consegue!!! <br /> Afinal, chegou a hora de
                aprender um novo idioma ou talvez finalmente zerar a caixa de
                entrada com 4000 mil e-mails.
              </p>
            </div>
            <div className="image-category">
              <Lottie
                options={{ ...lottieOptions, animationData: FocusLottie }}
              />
            </div>
          </CategoryContent>
        </CategoryContainer>
        <CategoryContainer categoryColor="var(--colorFit)">
          <CategoryContent>
            <div className="image-category">
              <Lottie
                options={{ ...lottieOptions, animationData: FitLottie }}
              />
            </div>
            <div className="infos-category">
              <h1>
                <FaLeaf /> Ficando em forma
              </h1>
              <p>
                Você é igual eu que todo fim de ano faz a mesma promessa? Ano
                que vem vou ser fitness! Mas esse que vem nunca chega? Com a
                categoria FICANDO EM FORMA esse sonho passa a se tornar um pouco
                mais realidade a cada check-in marcado.
                <br /> Que tal começar a fazer uma caminhada, ir para academia
                ou finalmente marcar aquele futebol com os amigos?
              </p>
            </div>
          </CategoryContent>
        </CategoryContainer>
        <CategoryContainer categoryColor="var(--colorHouse)">
          <CategoryContent>
            
            <div className="infos-category">
              <h1>
                <FaHouseDamage /> Lar doce lar
              </h1>
              <p>
              Final de dia, você já está cansado do trabalho e ao chegar na sua casa encontra ela toda desorganizada? Ninguém merece né?<br /> Uma boa organização pessoal começa com uma casa organizada, para isso criamos a categoria LAR DOCE LAR, para você lembrar de tarefas como varrer o chão, lavar os pratos e quando chegar em casa, sua cama já estar arrumada!
              </p>
            </div>
            <div className="image-category">
              <Lottie
                options={{ ...lottieOptions, animationData: HouseLottie }}
              />
            </div>
          </CategoryContent>
        </CategoryContainer>
        <CategoryContainer categoryColor="var(--colorNight)">
          <CategoryContent>
          <div className="image-category">
              <Lottie
                options={{ ...lottieOptions, animationData: NightLottie }}
              />
            </div>
            <div className="infos-category">
              <h1>
                <FaMoon /> Boa noite
              </h1>
              <p>
              Uma boa noite de sono faz bem para o corpo e para a alma. Mas como conseguir se desligar num mundo que fica 24 horas online ? <br /> Com o Habitare você cria hábitos como desconectar-se do celular uma hora antes de dormir, dormir ao menos 8 horas por dia e evitar comer aquele torresmo tarde, que vai te assombrar por toda a noite, para isto use nossa categoria BOA NOITE!
              </p>
            </div>

          </CategoryContent>
        </CategoryContainer>
      </ThirtySection>
    </HomeContainer>
  );
};

export default Home;

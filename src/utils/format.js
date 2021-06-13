import {
  FaStar,
  FaHands,
  FaLeaf,
  FaMoneyBillWave,
  FaHouseDamage,
  FaMoon,
  FaCompressArrowsAlt,
  FaRegStar,
} from "react-icons/fa";

import SpiritLottie from "../assets/lotties/spirit.json";
import FitLottie from "../assets/lotties/fit.json";
import HouseLottie from "../assets/lotties/house.json";
import MoneyLottie from "../assets/lotties/money.json";
import NightLottie from "../assets/lotties/night.json";
import FocusLottie from "../assets/lotties/focus.json";

const CATEGORIES = {
  spirit: {
    title: "Corpo e mente saudáveis",
    icon: <FaHands />,
    color: "var(--colorSpirit)",
    image: {
      loop: true,
      autoplay: false,
      animationData: SpiritLottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  },
  fit: {
    title: "Ficando em forma",
    icon: <FaLeaf />,
    color: "var(--colorFit)",
    image: {
      loop: true,
      autoplay: false,
      animationData: FitLottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  },
  money: {
    title: "Me poupe",
    icon: <FaMoneyBillWave />,
    color: "var(--colorMoney)",
    image: {
      loop: true,
      autoplay: false,
      animationData: MoneyLottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  },
  focus: {
    title: "Foco, força e fé",
    icon: <FaCompressArrowsAlt />,
    color: "var(--colorFocus)",
    image: {
      loop: true,
      autoplay: false,
      animationData: FocusLottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  },
  night: {
    title: "Boa noite",
    icon: <FaMoon />,
    color: "var(--colorNight)",
    image: {
      loop: true,
      autoplay: false,
      animationData: NightLottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  },
  house: {
    title: "Lar doce lar",
    icon: <FaHouseDamage />,
    color: "var(--colorHouse)",
    image: {
      loop: true,
      autoplay: false,
      animationData: HouseLottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  },
};

const DIFFICULTIES = {
  fácil: {
    icons: (
      <>
        <FaStar />
        <FaRegStar />
        <FaRegStar />
      </>
    ),
  },
  médio: {
    icons: (
      <>
        <FaStar />
        <FaStar />
        <FaRegStar />
      </>
    ),
  },
  difícil: {
    icons: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
  },
};

export const categoryFormat = (category) => {
  return CATEGORIES[category];
};

export const difficultyFormat = (difficulty) => {
  return DIFFICULTIES[difficulty];
};

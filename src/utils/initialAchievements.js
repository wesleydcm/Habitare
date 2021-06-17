import Morpheus from "../assets/images/insignias/morpheus.svg";
import FSociety from "../assets/images/insignias/fsociety-mask.svg";
import Ticket from "../assets/images/insignias/ticket.png";
import Yoda from "../assets/images/insignias/yoda.svg";
import Virtue from "../assets/images/insignias/virtue.png";
import Stress from "../assets/images/insignias/stress.png";
import Neo from "../assets/images/insignias/neo.svg";
import Peace from "../assets/images/insignias/peace-symbol.png";
import Brain from "../assets/images/insignias/brain.png";
import Freedy from "../assets/images/insignias/freddy-krueger.svg";
import Dreaming from "../assets/images/insignias/dreaming-in-bed.png";
import NoMobile from "../assets/images/insignias/no-mobile.png";
import Egg from "../assets/images/insignias/egg.png";
import Chicken from "../assets/images/insignias/chicken.png";
import MoneyBox from "../assets/images/insignias/money-box.png";
import MilkCarton from "../assets/images/insignias/milk-carton.png";
import MoneyStack from "../assets/images/insignias/stack-of-money.png";
import Home from "../assets/images/insignias/home.svg";
import HomeAnimated from "../assets/images/insignias/home.gif";
import Groot from "../assets/images/insignias/groot.svg";
import Irrigation from "../assets/images/insignias/irrigation.png";
import Broom from "../assets/images/insignias/broom.png";
import Homer from "../assets/images/insignias/homer-simpson.svg";
import LightSaber from "../assets/images/insignias/lightsaber.svg";
import BookReading from "../assets/images/insignias/book-reading.png";
import CookieMonster from "../assets/images/insignias/cookie-monster.svg";
import WeCanDoIt from "../assets/images/insignias/we-can-do-it.png";
import Muscle from "../assets/images/insignias/muscle.png";
import Sun from "../assets/images/insignias/sun.png";
import Bonfire from "../assets/images/insignias/bonfire.png";
import Rick from "../assets/images/insignias/rick.svg";

const initialAchievements = [
  {
    id: "1",
    title: "Bem vindo!",
    notification:
      "Você escolheu a red pill, seus olhos foram abertos para viver com hábitos saudáveis.",
    description: "Conta criada",
    achieved: false,
    secret: false,
    image: Morpheus,
  },
  {
    id: "2",
    title: "Olá Mr. Robot!",
    notification: "Elliot Alderson, é você?",
    description: "Aperte f + 1 + 2 na página conquistas.",
    achieved: false,
    secret: true,
    image: FSociety,
  },
  {
    id: "3",
    title: "O primeiro passo.",
    notification: "Te vejo amanhã!",
    description: "Dê seu primeiro check-in",
    achieved: false,
    secret: false,
    image: Ticket,
  },
  {
    id: "4",
    title: "Um jedi completo.",
    notification: "A força, com você, está!",
    description: "Complete um hábito de cada categoria",
    achieved: false,
    secret: false,
    image: Yoda,
  },
  {
    id: "5",
    title: "A primeira de muitas vitórias.",
    notification: "A primeira de muitas vitórias!",
    description: "Completou seu primeiro hábito",
    achieved: false,
    secret: false,
    image: Virtue,
  },
  {
    id: "6",
    title: "Bem, não era esse o plano...",
    notification:
      "Bem, não era esse o plano... Mas tudo bem, você consegue na próxima!",
    description: "Excluiu um hábito.",
    achieved: false,
    secret: true,
    image: Stress,
  },
  {
    id: "7",
    title: "O escolhido",
    notification: "Você está começando a acreditar.",
    description: "Completou um hábito de Corpo e mente saudáveis.",
    achieved: false,
    secret: false,
    image: Neo,
  },
  {
    id: "8",
    title: "Grato.",
    notification: "Agradecer é o caminho para se ter uma vida em paz",
    description: "Completou Praticar a gratidão",
    achieved: false,
    secret: true,
    image: Peace,
  },
  {
    id: "9",
    title: "Mente e cérebro felizes.",
    notification: "Uma mente feliz é um cérebro feliz!",
    description: "Iniciou um hábito de Corpo e mente saudáveis.",
    achieved: false,
    secret: false,
    image: Brain,
  },
  {
    id: "10",
    title: "Bons sonhos",
    notification: "Tá na hora de dormir...",
    description: "Iniciou um hábito de Boa noite.",
    achieved: false,
    secret: false,
    image: Freedy,
  },
  {
    id: "11",
    title: "Dorminhoco",
    notification: "Só de clicar nesse check-in já me deu um sono...",
    description: "Completou um hábito de Boa noite.",
    achieved: false,
    secret: false,
    image: Dreaming,
  },
  {
    id: "12",
    title: "Chega de distrações!",
    notification: "Chega de distrações!",
    description: "Completou Desconecte-se do celular.",
    achieved: false,
    secret: true,
    image: NoMobile,
  },
  {
    id: "13",
    title: "Começando a economizar.",
    notification: "De grão em grão...",
    description: "Criou um hábito de Me poupe.",
    achieved: false,
    secret: false,
    image: Egg,
  },
  {
    id: "14",
    title: "Papo cheio.",
    notification: "... A galinha enche o papo",
    description: "Completou um hábito de Me poupe",
    achieved: false,
    secret: false,
    image: Chicken,
  },
  {
    id: "15",
    title: "Desconto de 100%",
    notification: "Se eu não comprar nada, o desconto é bem maior!",
    description: "Completou Planejar gastos",
    achieved: false,
    secret: true,
    image: MoneyBox,
  },
  {
    id: "16",
    title: "Alguém vai beber o leite derramado!",
    notification:
      "Eu não acredito nisso, 49 centavos de leite derramado na minha mesa!",
    description: "Completou Monitorar gastos",
    achieved: false,
    secret: true,
    image: MilkCarton,
  },
  {
    id: "17",
    title: "20 milhões não da pra nada!",
    notification: "R$ 200.000/mês eu acho que consigo viver com tranquilidade.",
    description: "Completou 5 hábitos de Me poupe.",
    achieved: false,
    secret: true,
    image: MoneyStack,
  },
  {
    id: "18",
    title: "Cuidando da casa.",
    notification: "Não vale jogar a sujeira em baixo do tapete!",
    description: "Criou um hábito Lar doce lar",
    achieved: false,
    secret: false,
    image: Home,
  },
  {
    id: "19",
    title: "Sweet home.",
    notification: "Home sweet home",
    description: "Completou um hábito Lar doce lar.",
    achieved: false,
    secret: false,
    image: HomeAnimated,
  },
  {
    id: "20",
    title: "Groot.",
    notification: "I'am Groot !!!",
    description: "Criou o hábito Regar as plantas",
    achieved: false,
    secret: true,
    image: Groot,
  },
  {
    id: "21",
    title: "Planta saudável.",
    notification: "Ta chovendo na minha horta",
    description: "Completou o hábito Regar as plantas.",
    achieved: false,
    secret: true,
    image: Irrigation,
  },
  {
    id: "22",
    title: "Vou varrendo.",
    notification: "Diga aonde você vai, que eu vou varrendo",
    description: "Completou o hábito Varrer o chão",
    achieved: false,
    secret: true,
    image: Broom,
  },
  {
    id: "23",
    title: "Mantendo o foco",
    notification: "Te desafio a ter mais foco que ele.",
    description: "Iniciou um hábito de Foco, Força e Fé",
    achieved: false,
    secret: false,
    image: Homer,
  },
  {
    id: "24",
    title: "A força.",
    notification: "Seu foco é como de um jedi!",
    description: "Completou um hábito de Foco, Força e Fé",
    achieved: false,
    secret: false,
    image: LightSaber,
  },
  {
    id: "25",
    title: "Leitor assíduo",
    notification: "É, o livro era bem melhor.",
    description: "Completou Ler um capítulo de um livro",
    achieved: false,
    secret: true,
    image: BookReading,
  },
  {
    id: "26",
    title: "Corte de calorias",
    notification: "Cookies? só se for pro cookies monster.",
    description: "Iniciou um hábito de Ficando em forma",
    achieved: false,
    secret: false,
    image: CookieMonster,
  },
  {
    id: "27",
    title: "Trapésio descendente.",
    notification: "BIRLLLL!!! TÁ SAINDO DA JAULA O MONSTRO",
    description: "Completou um hábito Ficando em forma.",
    achieved: false,
    secret: false,
    image: WeCanDoIt,
  },
  {
    id: "28",
    title: "Tá pago!",
    notification: "O de hoje tá pago!!!",
    description: "Primeiro check-in em Ficando em forma",
    achieved: false,
    secret: true,
    image: Muscle,
  },
  {
    id: "29",
    title: "Cooperação amigável",
    notification: "Porque não ter companhia nessa jornada, não é mesmo?",
    description: "Entrou para um grupo",
    achieved: false,
    secret: false,
    image: Sun,
  },
  {
    id: "30",
    title: "Most Valuable Player",
    notification: "Eu gosto quando é dificil!",
    description: "Completou 3 hábitos difíceis",
    achieved: false,
    secret: false,
    image: Bonfire,
  },
  {
    id: "31",
    title: "Wubalubadubdub",
    notification: "O ser mais inteligente do universo!",
    description: "Complete 1 hábito difícil de Foco, Força é fé",
    achieved: false,
    secret: false,
    image: Rick,
  },
];

export default initialAchievements;

import { AchievementBox, ImgBadge, TextBox } from "./styles";
import Jardim from "../../assets/badges/morpheus.svg";
const AchievementCard = () => {
  return (
    <AchievementBox>
      <ImgBadge src={Jardim} alt="insíginia" />
      <TextBox>
        <h3>Novo Mundo</h3>
        <p>
          Receba a red pill do Morpheus e abra seus olhos para uma vida com
          hábitos saudáveis.
        </p>
      </TextBox>
    </AchievementBox>
  );
};
export default AchievementCard;

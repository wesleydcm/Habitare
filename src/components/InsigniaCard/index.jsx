import { Container, Image, Elipse, Title, Description, Info } from "./styles";

const InsigniaCard = ({ achieved = false, image, description, title }) => {
  return (
    <Container achieved={achieved}>
      {achieved ? (
        <Image src={image} alt="achievement-img"></Image>
      ) : (
        <Elipse></Elipse>
      )}
      <Info>
        <Title achieved={achieved}>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
};

export default InsigniaCard;

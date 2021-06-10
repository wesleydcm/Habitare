import {
  FaHands,
  FaSeedling,
  FaCompressArrowsAlt,
  FaMoneyBillWave,
  FaHome,
  FaMoon,
} from "react-icons/fa";
import { Container, FiltersContent, IconContainer } from "./styles";
// spirit fit focus money house night
const FilterCategory = (handleFilter) => {
  const handleClick = (category) => {
    /* handleFilter(category); */
  };
  return (
    <Container>
      <span>Filtrar categorias</span>
      <FiltersContent>
        <IconContainer color="spirit" onClick={() => handleClick("spirit")}>
          <FaHands />
        </IconContainer>
        <IconContainer color="fit" onClick={() => handleClick("fit")}>
          <FaSeedling />
        </IconContainer>
        <IconContainer color="focus" onClick={() => handleClick("focus")}>
          <FaCompressArrowsAlt />
        </IconContainer>
        <IconContainer color="money" onClick={() => handleClick("money")}>
          <FaMoneyBillWave />
        </IconContainer>
        <IconContainer color="house" onClick={() => handleClick("house")}>
          <FaHome />
        </IconContainer>
        <IconContainer color="night" onClick={() => handleClick("night")}>
          <FaMoon />
        </IconContainer>
      </FiltersContent>
    </Container>
  );
};

export default FilterCategory;

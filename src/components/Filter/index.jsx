import { useState } from "react";
import {
  FaIcons,
  FaHands,
  FaSeedling,
  FaCompressArrowsAlt,
  FaMoneyBillWave,
  FaHome,
  FaMoon,
} from "react-icons/fa";
import { Container, FiltersContent, IconContainer } from "./styles";

const FilterCategory = ({ handleFilter }) => {
  const [filterSelect, setFilterSelect] = useState("displayAll");
  const handleClick = (category) => {
    setFilterSelect(category);
    handleFilter(category);
  };
  return (
    <Container>
      <span>Filtrar categorias</span>
      <FiltersContent>
        <IconContainer
          color="displayAll"
          onClick={() => handleClick("displayAll")}
          filterSelect={filterSelect === "displayAll" ? true : false}
        >
          <FaIcons />
        </IconContainer>
        <IconContainer
          color="spirit"
          filterSelect={filterSelect === "spirit" ? true : false}
          onClick={() => handleClick("spirit")}
        >
          <FaHands />
        </IconContainer>
        <IconContainer
          color="fit"
          filterSelect={filterSelect === "fit" ? true : false}
          onClick={() => handleClick("fit")}
        >
          <FaSeedling />
        </IconContainer>
        <IconContainer
          color="focus"
          filterSelect={filterSelect === "focus" ? true : false}
          onClick={() => handleClick("focus")}
        >
          <FaCompressArrowsAlt />
        </IconContainer>
        <IconContainer
          color="money"
          filterSelect={filterSelect === "money" ? true : false}
          onClick={() => handleClick("money")}
        >
          <FaMoneyBillWave />
        </IconContainer>
        <IconContainer
          color="house"
          filterSelect={filterSelect === "house" ? true : false}
          onClick={() => handleClick("house")}
        >
          <FaHome />
        </IconContainer>
        <IconContainer
          color="night"
          filterSelect={filterSelect === "night" ? true : false}
          onClick={() => handleClick("night")}
        >
          <FaMoon />
        </IconContainer>
      </FiltersContent>
    </Container>
  );
};

export default FilterCategory;

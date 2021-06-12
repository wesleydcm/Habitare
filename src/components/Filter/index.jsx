import { useState } from "react";
import {
  FaHands,
  FaSeedling,
  FaCompressArrowsAlt,
  FaMoneyBillWave,
  FaHome,
  FaMoon,
} from "react-icons/fa";

import {
  Container,
  FiltersContent,
  IconContainer,
  IconDisplayAll,
  SvgContent,
} from "./styles";

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
        <IconDisplayAll onClick={() => handleClick("displayAll")}>
          <SvgContent
            color="spirit"
            filterSelect={filterSelect === "displayAll" ? true : false}
          >
            <FaHands />
          </SvgContent>
          <SvgContent
            color="fit"
            filterSelect={filterSelect === "displayAll" ? true : false}
          >
            <FaSeedling />
          </SvgContent>

          <SvgContent
            color="focus"
            filterSelect={filterSelect === "displayAll" ? true : false}
          >
            <FaCompressArrowsAlt />
          </SvgContent>

          <SvgContent
            color="house"
            filterSelect={filterSelect === "displayAll" ? true : false}
          >
            <FaHome />
          </SvgContent>
        </IconDisplayAll>

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

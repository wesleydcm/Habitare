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

const FilterCategory = ({ handleFilter, page }) => {
  const lastCategory =
    JSON.parse(localStorage.getItem(`@Habitare:${page}LastCategory`)) ||
    "displayAll";
  const [, setFilterSelect] = useState(lastCategory);
  const handleClick = (category) => {
    setFilterSelect(
      localStorage.setItem(
        `@Habitare:${page}LastCategory`,
        JSON.stringify(category)
      )
    );
    handleFilter(category);
  };
  return (
    <Container>
      <span>Filtrar categorias</span>
      <FiltersContent>
        <IconDisplayAll onClick={() => handleClick("displayAll")}>
          <SvgContent
            color="spirit"
            filterSelect={lastCategory === "displayAll" ? true : false}
          >
            <FaHands />
          </SvgContent>
          <SvgContent
            color="fit"
            filterSelect={lastCategory === "displayAll" ? true : false}
          >
            <FaSeedling />
          </SvgContent>

          <SvgContent
            color="focus"
            filterSelect={lastCategory === "displayAll" ? true : false}
          >
            <FaCompressArrowsAlt />
          </SvgContent>

          <SvgContent
            color="house"
            filterSelect={lastCategory === "displayAll" ? true : false}
          >
            <FaHome />
          </SvgContent>
        </IconDisplayAll>

        <IconContainer
          color="spirit"
          filterSelect={lastCategory === "spirit" ? true : false}
          onClick={() => handleClick("spirit")}
        >
          <FaHands />
        </IconContainer>
        <IconContainer
          color="fit"
          filterSelect={lastCategory === "fit" ? true : false}
          onClick={() => handleClick("fit")}
        >
          <FaSeedling />
        </IconContainer>
        <IconContainer
          color="focus"
          filterSelect={lastCategory === "focus" ? true : false}
          onClick={() => handleClick("focus")}
        >
          <FaCompressArrowsAlt />
        </IconContainer>
        <IconContainer
          color="money"
          filterSelect={lastCategory === "money" ? true : false}
          onClick={() => handleClick("money")}
        >
          <FaMoneyBillWave />
        </IconContainer>
        <IconContainer
          color="house"
          filterSelect={lastCategory === "house" ? true : false}
          onClick={() => handleClick("house")}
        >
          <FaHome />
        </IconContainer>
        <IconContainer
          color="night"
          filterSelect={lastCategory === "night" ? true : false}
          onClick={() => handleClick("night")}
        >
          <FaMoon />
        </IconContainer>
      </FiltersContent>
    </Container>
  );
};

export default FilterCategory;

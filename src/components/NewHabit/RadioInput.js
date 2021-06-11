import React from "react";

import styled from "styled-components";
import { useForm } from "react-hook-form";

import { CardCategory, CardFrequency } from "./styles";

const { useState } = React;

const RadioInput = () => {
  const [select, setSelect] = useState("optionA");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleForm = (res) => console.log(res);

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Wrapper>
        <Item onChange={(event) => handleSelectChange(event)}>
          <p>oládasdasdmundo</p>
          <RadioButton
            type="radio"
            name="radio"
            value="optionA"
            checked={select === "optionA"}
            {...register("optionA")}
          />
          <RadioButtonLabel />
        </Item>
        <Item onChange={(event) => handleSelectChange(event)}>
          <p>olá mundo</p>
          <RadioButton
            type="radio"
            value="optionB"
            checked={select === "optionB"}
            {...register("optionA")}
          />
          <RadioButtonLabel />
        </Item>
        <Item onChange={(event) => handleSelectChange(event)}>
          <RadioButton
            type="radio"
            value="optionBs"
            checked={select === "optionBs"}
            {...register("optionA")}
          />
          <RadioButtonLabel />
        </Item>

        <Item onChange={(event) => handleSelectChange(event)}>
          <RadioButton
            type="radio"
            value="optionBA"
            checked={select === "optionBA"}
            {...register("optionA")}
          />

          <RadioButtonLabel />
        </Item>
      </Wrapper>
      <button label="button" type="submit">
        sdasasdasdasd
      </button>
    </form>
  );
};

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  flex-flow: row wrap;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  justify-content: center;
  p {
    color: var(--white);
    z-index: 20;
    position: absolute;
    margin: 0;
    font-size: 10px;
    text-align: center;
    font-weight: 500;
    max-width: 100px;
  }
`;

const RadioButtonLabel = styled.label`
  background: blue;

  justify-content: center;
  min-width: 80px;
  cursor: pointer;
  display: flex;
  position: absolute;
  z-index: 0;
  height: 30px;
  margin: 4px;
  border-radius: 30px;
  padding: 2px 0;
  filter: brightness(1);
`;
export const RadioButton = styled.input`
  position: relative;
  opacity: 0;
  z-index: 205;
  cursor: pointer;
  min-width: 90px;
  width: 46%;
  height: 25px;
  margin-right: 10px;

  &:hover ~ ${CardCategory} {
    background: #ccc;
  }
  &:checked + ${CardCategory} {
    background: black;
  }

  &:hover ~ ${CardFrequency} {
    background: #ccc;
  }
  &:checked + ${CardFrequency} {
    background: black;
  }
`;
export const RadioButtonFrequency = styled.input`
  position: relative;
  opacity: 0;
  z-index: 205;
  cursor: pointer;
  min-width: 90px;
  width: 46%;
  height: 25px;
  margin-right: 10px;

  &:hover ~ ${CardFrequency} {
    background: #ccc;
  }
  &:checked + ${CardFrequency} {
    background: black;
  }
`;

export default RadioInput;

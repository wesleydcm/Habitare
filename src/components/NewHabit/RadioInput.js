import React from "react";

import styled from "styled-components";
import { useForm } from "react-hook-form";

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

const Wrapper = styled.div`
  height: auto;
  display: flex;
  flex-flow: row wrap;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  justify-content: center;
  p {
    color: var(--white);
    z-index: 20;
    position: absolute;
  }
`;

const RadioButtonLabel = styled.label`
  background: blue;
  display: flex;
  justify-content: center;
  min-width: 200px;
  height: 30px;
  margin: 4px;
  border-radius: 30px;
  padding: 2px 0;
  filter: brightness(1);
  cursor: pointer;
  position: absolute;
  z-index: 0;
`;
const RadioButton = styled.input`
  position: relative;
  opacity: 0;
  z-index: 205;
  cursor: pointer;
  min-width: 200px;
  height: 25px;
  margin-right: 10px;

  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
  }
  &:checked + ${RadioButtonLabel} {
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46%;
    height: 30px;
    margin: 4px;
    border-radius: 30px;
    padding: 2px 0;
    filter: brightness(0.7);
    cursor: pointer;
  }
`;

export default RadioInput;

import React, { useState } from "react";
import Button from "../Button";
import "antd/dist/antd.css";
import { FaTimes, FaPlus } from "react-icons/fa";
import {
  CustomModal,
  SuggestionsModal,
  SuggestionCardEmpty,
  ImageContainer,
} from "./styles";


import Lottie from "react-lottie";

import { suggestions } from "../../suggestionsHabits";
import animationData from "../../assets/lotties/new.json";

import SuggestionCard from "../SuggestionCard";
import FormNewHabit from "../FormNewHabit";

const NewHabit = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [suggestionScreen, setSuggestionScreen] = useState(true);
  const [suggestionSelected, setSuggestionSelected] = useState({});
  const [paused, setPaused] = useState(true);

  const lottieOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const showModal = () => {
    setIsModalVisible(true);
    setSuggestionScreen(true)
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSuggestionScreen(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSuggestionScreen(true);
  };

  const handleNextStep = (habit) => {
    setSuggestionSelected(habit)
    setSuggestionScreen(false)
  };

  // const { register, handleSubmit } = useForm();

  // const handleForm = (res) => console.log(res);

  return (
    <>
      <Button onClick={showModal}>
        NOVO HÁBITO <FaPlus />
      </Button>

      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        title="Criar novo hábito"
        okText="Criar"
        cancelText="Cancelar"
        closeIcon={<FaTimes />}
        footer={null}
        bodyStyle={{ minHeight: 450 }}
      >
        {suggestionScreen ? (
          <SuggestionsModal>
            <SuggestionCardEmpty
              onMouseEnter={() => setPaused(false)}
              onMouseLeave={() => setPaused(true)}
              onClick={() => handleNextStep({})}
            >
              <h2>Criar um hábito do zero</h2>
              <ImageContainer>
                <Lottie options={lottieOptions} isPaused={paused} />
              </ImageContainer>
            </SuggestionCardEmpty>
            {suggestions.map((suggestion) => {
              return (
                <SuggestionCard suggestion={suggestion} key={suggestion.id} onClickFunc={handleNextStep}/>
              );
            })}
          </SuggestionsModal>
        ) : (
          <>
            <FormNewHabit habit={suggestionSelected} closeModal={handleOk}/>
          </>
        )}
      </CustomModal>
    </>
  );
};

export default NewHabit;

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

            {/* <form onSubmit={handleSubmit(handleForm)}>
              <InputModal
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Qual seu novo hábito?"
                {...register("title")}
              />

              <p>Em qual categoria seu hábito se encaixa?</p>
              <CardContainer>
                <Item onChange={(event) => handleSelectChange(event)}>
                  <RadioButton
                    type="radio"
                    name="radio"
                    value="spirit"
                    checked={select === "spirit"}
                    {...register("category")}
                    color="var(--colorSpirit)"
                  />
                  <CardCategory color="var(--colorSpirit)">
                    <CustomText color="var(--colorSpirit)">
                      Corpo e mente saudáveis
                    </CustomText>
                  </CardCategory>
                </Item>

                <Item onChange={(event) => handleSelectChange(event)}>
                  <RadioButton
                    type="radio"
                    name="radio"
                    value="fit"
                    checked={select === "fit"}
                    {...register("category")}
                    color="var(--colorFit)"
                  />
                  <CardCategory color="var(--colorFit)">
                    <CustomText color="var(--colorFit)">
                      Ficando em forma
                    </CustomText>
                  </CardCategory>
                </Item>

                <Item onChange={(event) => handleSelectChange(event)}>
                  <RadioButton
                    type="radio"
                    name="radio"
                    value="focus"
                    checked={select === "focus"}
                    {...register("category")}
                    color="var(--colorFocus)"
                  />
                  <CardCategory color="var(--colorFocus)">
                    <CustomText color="var(--colorFocus)">
                      foco, força e fé
                    </CustomText>
                  </CardCategory>
                </Item>

                <Item onChange={(event) => handleSelectChange(event)}>
                  <RadioButton
                    type="radio"
                    name="radio"
                    value="money"
                    checked={select === "money"}
                    {...register("category")}
                    color="var(--colorMoney)"
                  />
                  <CardCategory color="var(--colorMoney)">
                    <CustomText color="var(--colorMoney)">Me poupe</CustomText>
                  </CardCategory>
                </Item>

                <Item onChange={(event) => handleSelectChange(event)}>
                  <RadioButton
                    type="radio"
                    name="radio"
                    value="house"
                    checked={select === "house"}
                    {...register("category")}
                    color="var(--colorHouse)"
                  />
                  <CardCategory color="var(--colorHouse)">
                    <CustomText color="var(--colorHouse)">
                      Lar doce lar
                    </CustomText>
                  </CardCategory>
                </Item>

                <Item onChange={(event) => handleSelectChange(event)}>
                  <RadioButton
                    type="radio"
                    name="radio"
                    value="night"
                    checked={select === "night"}
                    {...register("category")}
                    color="var(--colorNight)"
                  />
                  <CardCategory color="var(--colorNight)">
                    <CustomText color="var(--colorNight)">Boa noite</CustomText>
                  </CardCategory>
                </Item>
              </CardContainer>

              <p>Com qual frequência?</p>
              <div className="wrap">
                <Item onClick={(event) => handleSelectFrequencyChange(event)}>
                  <RadioButtonFrequency
                    type="radio"
                    name="radio"
                    value="diario"
                    checked={selectFrequency === "diario"}
                    {...register("frequency")}
                  />
                  <CardFrequency>
                    <CustomText>Diário</CustomText>
                  </CardFrequency>
                </Item>

                <Item onChange={(event) => handleSelectFrequencyChange(event)}>
                  <RadioButtonFrequency
                    type="radio"
                    name="radio"
                    value="semanal"
                    checked={selectFrequency === "semanal"}
                    {...register("frequency")}
                  />
                  <CardFrequency>
                    <CustomText>Semanal</CustomText>
                  </CardFrequency>
                </Item>
                <Item onChange={(event) => handleSelectFrequencyChange(event)}>
                  <RadioButtonFrequency
                    type="radio"
                    name="radio"
                    value="quinzenal"
                    checked={selectFrequency === "quinzenal"}
                    {...register("frequency")}
                  />
                  <CardFrequency>
                    <CustomText>Quinzenal</CustomText>
                  </CardFrequency>
                </Item>
                <Item onChange={(event) => handleSelectFrequencyChange(event)}>
                  <RadioButtonFrequency
                    type="radio"
                    name="radio"
                    value="mensal"
                    checked={selectFrequency === "mensal"}
                    {...register("frequency")}
                  />
                  <CardFrequency>
                    <CustomText>Mensal</CustomText>
                  </CardFrequency>
                </Item>
              </div>
              <p>O quanto é difícil para você manter esse hábito?</p>
              <WrapStars>
                <DificultyItem
                  onChange={(event) => handleSelectDificultyChange(event)}
                >
                  <RadioButtonDificulty
                    type="radio"
                    name="radio"
                    value="facil"
                    checked={selectDificulty === "facil"}
                    {...register("difficulty")}
                  />

                  {selectDificulty === "facil" && (
                    <StartsInput src={selectedStar} alt="filled star" />
                  )}
                  {selectDificulty === "medio" && (
                    <StartsInput src={filledStar} alt="filled star" />
                  )}
                  {selectDificulty === "dificil" && (
                    <StartsInput src={filledStar} alt="filled star" />
                  )}
                  {selectDificulty === "facil" && <p>Fácil</p>}
                </DificultyItem>

                <DificultyItem
                  onChange={(event) => handleSelectDificultyChange(event)}
                >
                  <RadioButtonDificulty
                    type="radio"
                    name="radio"
                    value="medio"
                    checked={selectDificulty === "medio"}
                    {...register("difficulty")}
                  />
                  {selectDificulty === "facil" && (
                    <StartsInput src={emptyStar} alt="filled star" />
                  )}
                  {selectDificulty === "medio" && (
                    <StartsInput src={selectedStar} alt="filled star" />
                  )}
                  {selectDificulty === "dificil" && (
                    <StartsInput src={filledStar} alt="filled star" />
                  )}
                  {selectDificulty === "medio" && (
                    <p className="medio">Médio</p>
                  )}
                </DificultyItem>

                <DificultyItem
                  onChange={(event) => handleSelectDificultyChange(event)}
                >
                  <RadioButtonDificulty
                    type="radio"
                    name="radio"
                    value="dificil"
                    checked={selectDificulty === "dificil"}
                    {...register("difficulty")}
                  />
                  {selectDificulty === "facil" && (
                    <StartsInput src={emptyStar} alt="filled star" />
                  )}
                  {selectDificulty === "medio" && (
                    <StartsInput src={emptyStar} alt="filled star" />
                  )}
                  {selectDificulty === "dificil" && (
                    <StartsInput src={selectedStar} alt="filled star" />
                  )}
                  {selectDificulty === "dificil" && <p>Difícil</p>}
                </DificultyItem>
              </WrapStars>
              <ButtonWrap>
                <ButtonForm>Criar</ButtonForm>
              </ButtonWrap>
            </form> */}
          </>
        )}
      </CustomModal>
    </>
  );
};

export default NewHabit;

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

import { categoryFormat } from "../../utils/format";
import { CardContainer, ImageContainer, SuggestionInfo } from "./styles";

const SuggestionCard = ({ suggestion }) => {
  const [suggestionFormatted, setSuggestionFormatted] = useState({});
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const categoryFormatted = categoryFormat(suggestion.category);

    setSuggestionFormatted({ ...suggestion, categoryFormatted });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CardContainer
      onClick={() => console.log(suggestionFormatted.id)}
      onMouseEnter={() => setPaused(false)}
      onMouseLeave={() => setPaused(true)}
      categoryColor={suggestionFormatted.categoryFormatted?.color}
    >
      <SuggestionInfo>
        <h2>{suggestionFormatted.title}</h2>
        <h3>
          {suggestionFormatted.categoryFormatted?.icon}
          {suggestionFormatted.categoryFormatted?.title}
        </h3>
      </SuggestionInfo>
      <ImageContainer
        category={suggestionFormatted.category}
        className="lottie"
      >
        {suggestionFormatted.categoryFormatted && (
          <Lottie
            options={suggestionFormatted.categoryFormatted?.image}
            isPaused={paused}
          />
        )}
      </ImageContainer>
    </CardContainer>
  );
};

export default SuggestionCard;

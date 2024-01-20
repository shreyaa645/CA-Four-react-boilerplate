import React, { useState } from "react";

export default function QuestionBox({
  question,
  totalQuestions,
  highlighted,
  onNextQuestion,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    onNextQuestion(selectedOption === question.correctOptionId, selectedOption);
    setSelectedOption(null);
  };
  

  return (
    <>
    <div className={highlighted ? "highlighted-question" : ""}>
      <h2>
        Question: {question.number} out of {totalQuestions}
      </h2>
      <p>{question.text}</p>
      <ul>
        {question.options.map((option) => (
          <li
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            className={selectedOption === option.id ? "selected-option" : ""}
          >
            {option.text}
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
    </div>
    </>
  );
}

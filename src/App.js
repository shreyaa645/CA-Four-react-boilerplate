import React, { useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [highlightedQuestion, setHighlightedQuestion] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const highlightQuestion = () => {
    setHighlightedQuestion(questions[currentQuestion].id);
  };

  const removeHighlight = () => {
    setHighlightedQuestion(null);
  };

  const onNextQuestion = (isCorrect, selectedOption) => {
    setUserAnswers([...userAnswers, { questionId: currentQuestion, isCorrect, selectedOption }]);
    setCurrentQuestion(currentQuestion + 1);
    setHighlightedQuestion(null);
  };
  
  return (
    <div className={darkMode ? "app-dark" : "app-light"}>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button className="high-btn" onClick={highlightQuestion}>Highlight</button>
      <button className="rem-btn" onClick={removeHighlight}>Highlight</button>

      {currentQuestion < questions.length ? (
        <QuestionBox
          question={questions[currentQuestion]}
          totalQuestions={questions.length}
          highlighted={highlightedQuestion === questions[currentQuestion].id}
          onNextQuestion={onNextQuestion}
        />
      ) : (
        <Result userAnswers={userAnswers} totalQuestions={questions.length} />
      )}
    </div>
  );
}

export default App;
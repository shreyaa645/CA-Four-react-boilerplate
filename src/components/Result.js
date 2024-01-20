import React from "react";

export default function Result({ userAnswers, totalQuestions }) {
  // Calculate the score and percentage
  const score = userAnswers.filter((answer) => answer.isCorrect).length;
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div>
      <h2>Result</h2>
      <p>Your Score: {score}</p>
      <p>Percentage: {percentage}%</p>
    </div>
  );
}

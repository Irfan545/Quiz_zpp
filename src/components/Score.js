import React from "react";

export default function Score({
  result,
  score,
  questions,
  playAgain,
  handleShowAnswers,
}) {
    
  return (
    <div>
      {result && (
        <div>
          <h1>Your Score</h1>
          <h2>{score}%</h2>
          <h3>
            {score / questions.length}/{questions.length}
          </h3>
          <button onClick={playAgain}>retake</button>
          <button onClick={handleShowAnswers}>Show Answers</button>
        </div>
      )}
    </div>
  );
}

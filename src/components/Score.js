import React from "react";
import './app.css'

export default function Score({
  result,
  score,
  correctAnsCount,
  questions,
  playAgain,
  handleShowAnswers,
})

{
  return (
    <div>
      {result && (
        <div>
          <div className="score" >
          <div className="score-header">
          <p>Your Score:</p>
          </div>
          <div className="percentage">
          <p className="percentage-color">Percentage: {score}%</p>
          </div>
          <p className="percentage-color">
           Correct: {correctAnsCount}/{questions.length}
          </p>
          </div>
          <div className="score-buttons">
          <button className="retake-ans" onClick={playAgain}>Try Again</button>
          <button className="retake-ans" onClick={handleShowAnswers}>Show Answers</button>
          </div>
        </div>
      )}
    </div>
  );
}

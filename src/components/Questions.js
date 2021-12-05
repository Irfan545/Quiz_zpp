import React from "react";
import { useEffect, useState, useRef } from "react";
import Answers from "./Answers";
import Score from "./Score";

export default function Questions(props) {
  const [questions, setQuestions] = useState([
    {
      id: 0,
      question: "What is my name",
      options: ["Irfan", "Arif", "Imran", "Asif"],
      correct: "Irfan",
    },
    {
      id: 1,
      question: "What do you call a type of shape that has five sides?",
      options: ["Trigon", "Hexagon", "Pentagon", "Octagon"],
      correct: "Pentagon",
    },
    {
      id: 2,
      question: "Which way is anti-clockwise?",
      options: ["Right", "Up", "Down", "Left"],
      correct: "Left",
    },
    {
      id: 3,
      question: "How many equal sides does an isosceles triangle have?",
      options: ["2", "3", "4", "1"],
      correct: "2",
    },
    {
      id: 4,
      question: "Which is the coldest location in the earth?",
      options: ["America", "Africa", "Antarctica", "Ooty"],
      correct: "Antarctica",
    },
    {
      id: 5,
      question:
        "Which two parts of the body continue to grow for your entire life?",
      options: [
        "Eyes and Brain",
        "Teeth and Toung",
        "Lungs and Liver",
        "Nose and Ears",
      ],
      correct: "Nose and Ears",
    },
    {
      id: 6,
      question: "The largest ‘Democracy’ in the world?",
      options: ["China", "India", "America", "Russia"],
      correct: "India",
    },
    {
      id: 7,
      question: "What color symbolizes peace?",
      options: ["White", "Yellow", "Blue", "Green"],
      correct: "White",
    },
    {
      id: 8,
      question: "During which year did World War I begin?",
      options: ["1930", "1941", "1914", "1935"],
      correct: "1914",
    },
    {
      id: 9,
      question: "How many Cricket world cups does India have?",
      options: ["5", "8", "4", "2"],
      correct: "2",
    },
  ]);

  const [ans, setans] = useState();

  const name = useRef();
  const [score, setscore] = useState(0);

  const [rquestion, setrquestion] = useState([]);

  const [newquestion, setnewquestion] = useState([]);

  const [nextClick, setnextClick] = useState();

  const [finish, setfinish] = useState(false);

  const [result, setresult] = useState(false);

  const [givenAns, setgivenAns] = useState([]);

  const [over, setOver] = useState(false);

  const [showAnswers, setShowAnswers] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);

  const [correctAnsCount, setCorrectAnsCount] = useState(0);

  var random = Math.floor(Math.random() * questions.length);

  useEffect(() => {
    setfinish(false);
    setrquestion(questions);
    setnewquestion(questions[random]);
  }, []);

  useEffect(() => {
    if (nextClick === true) {
      random = Math.floor(Math.random() * rquestion.length);
      setnewquestion(rquestion[random]);
      setnextClick(false);
      // console.log(rquestion);
    }

    if (rquestion.length === 1) {
      setfinish(true);
      setnextClick(true);
    }
  }, [nextClick]);

  const newQuestion = (id) => {
    setgivenAns([...givenAns, ans]);
    setnextClick(true);

    const newQ = rquestion.filter((question) => question.id !== id);

    setrquestion(newQ);
    setIsDisabled(true);
    // console.log(givenAns);
  };

  const userScore = () => {
    setgivenAns([...givenAns, ans]);

    const percentage = Math.floor((score / questions.length) * 100);

    setCorrectAnsCount(score);
    setscore(percentage);
    setresult(true);
    setfinish(false);
    setOver(true);
  };

  const chooseAns = (e) => {
    const id = e.timeStamp;
    const choosen = e.target.innerText;

    setans([{ choosen, id }]);

    if (newquestion.correct === choosen) {
      const s = score + 1;
      setscore(s);
    }
    setIsDisabled(false);
  };

  const playAgain = () => {
    setnextClick(false);
    setfinish(false);
    setrquestion(questions);
    setnewquestion(questions[random]);
    setresult(false);
    setscore(0);
    setgivenAns([]);
    setOver(false);
    setShowAnswers(false);
    setIsDisabled(true);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
  };

  return (
    <div>
      {!over && newquestion && newquestion.options && (
        <div>
          <h1>{newquestion.question}</h1>
          {newquestion.options.map((opt) => (
            <div key={opt}>
              <button ref={name} onClick={chooseAns}>
                {opt}
              </button>
            </div>
          ))}
          {!nextClick && (
            <button
              type="submit"
              disabled={isDisabled}
              onClick={() => newQuestion(newquestion.id)}
            >
              next
            </button>
          )}
          {finish && (
            <button onClick={userScore} disabled={isDisabled}>
              finish
            </button>
          )}
        </div>
      )}
      {over && !showAnswers && (
        <Score
          result={result}
          score={score}
          correctAnsCount={correctAnsCount}
          questions={questions}
          playAgain={playAgain}
          handleShowAnswers={handleShowAnswers}
        />
      )}
      {showAnswers && <Answers givenAns={givenAns} playAgain={playAgain} />}
    </div>
  );
}

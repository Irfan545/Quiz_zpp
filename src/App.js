import { useEffect, useState } from "react";
// import { Prev } from "react-bootstrap/esm/PageItem";

const App=() => {
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
      question: "Which two parts of the body continue to grow for your entire life?",
      options: ["Eyes and Brain", "Teeth and Toung", "Lungs and Liver", "Nose and Ears"],
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
  const [score, setscore] = useState(0);

  const [retake,setretake]=useState(false);

  const [rquestion, setrquestion] = useState([]);

  const [newquestion, setnewquestion] = useState([]);

  const [nextClick, setnextClick] = useState();

  const [finish, setfinish] = useState(false);

  const [result, setresult] = useState(false);

  var random = Math.floor(Math.random() * questions.length);

  useEffect(() => {
    // console.log(random)
    // console.log(questions)
    console.log(score);
    setfinish(false);
    setrquestion(questions);
    setnewquestion(questions[random]);
  }, []);

  useEffect(() => {
    if (nextClick === true) {
      random = Math.floor(Math.random() * rquestion.length);
      setnewquestion(rquestion[random]);
      setnextClick(false);
      console.log(rquestion);
    }
    if (rquestion.length === 1) {
      setfinish(true);
      setnextClick(true);
    }
  }, [nextClick]);

  useEffect(()=>{
    if(retake==true){
    console.log(score);
    setnextClick(false)
    setfinish(false);
    setrquestion(questions);
    setnewquestion(questions[random]);
    setretake(false)
    setresult(false);
    setscore(0);
  }
  },[retake])


  const newQuestion = (id) => {
    setnextClick(true);
    // console.log(id)
    const newQ = rquestion.filter((question) => question.id !== id);
    setrquestion(newQ);
    console.log(score);
  };

  const userScore = () => {
    const percentage = Math.floor((score / questions.length) * 100);
    setscore(percentage);
    setresult(true);
    setfinish(false);
  };

  const chooseAns = (e) => {
    const choosen = e.target.innerText;
    // console.log(choosen)
    // console.log(newquestion.correct)
    if (newquestion.correct === choosen) {
      const s = score + 1;
      setscore(s);
    }
  };

  const playAgain=()=>{
    setretake(true);
  }

  return (
    <div>
      {newquestion && newquestion.options && (
        <div>
          <h1>{newquestion.question}</h1>
          <button onClick={chooseAns}>{newquestion.options[0]}</button>
          <button onClick={chooseAns}>{newquestion.options[1]}</button>
          <button onClick={chooseAns}>{newquestion.options[2]}</button>
          <button onClick={chooseAns}>{newquestion.options[3]}</button>
          {!nextClick && (
            <button onClick={() => newQuestion(newquestion.id)}>next</button>
          )}
        </div>
      )}
      {finish && <button onClick={userScore}>finish</button>}
      {result &&<div><h1>{score}%</h1>
      <button onClick={playAgain}>retake</button>
      </div>}
    </div>
  );
};

export default App;




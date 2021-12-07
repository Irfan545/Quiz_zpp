import './app.css'

function Answers({ givenAns, playAgain }) {
  return (
    <div>
      <p className="ans-header">Given answers are:</p>
      { givenAns?.map((ans) => (
        <div className="ans-options" key={ans[0].id}>
          <p className="percentage-color">{ans[0].choosen}</p>
        </div>
      ))}
      <div className="score-buttons">
      <button onClick={playAgain} className="retake-ans">retake</button>
      </div>
    </div>
  );
}

export default Answers;

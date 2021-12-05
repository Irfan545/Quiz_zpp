function Answers({ givenAns, playAgain }) {
  console.log(givenAns)
  return (
    <div>
      <h1>Given answers are:</h1>
      { givenAns?.map((ans) => (
        <div key={ans[0].id}>
          <h3>{ans[0].choosen}</h3>
        </div>
      ))}
      <button onClick={playAgain}>retake</button>
    </div>
  );
}

export default Answers;

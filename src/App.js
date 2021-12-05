import { Route, BrowserRouter, Routes } from "react-router-dom";
import Questions from "./components/Questions";
import Score from "./components/Score";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/results" element={<Score />} />
          <Route path="/" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

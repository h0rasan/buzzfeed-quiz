import Title from "./components/Title";
import { useState, useEffect } from "react";

const App = () => {
  const [quiz, setQuiz] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/quiz");
      const json = await response.json();
      setQuiz(json);
    } catch (err) {}
  };
  return (
    <div>
      <Title />
    </div>
  );
};

export default App;

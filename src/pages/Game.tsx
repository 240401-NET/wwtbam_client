import { useEffect, useState } from "react";
import ingameBackdrop from "../assets/gamebackdrop.webp";
import GameInfoSidebar from "../components/GameInfoSidebar";
import Lifelines from "../components/Lifelines";
import QuestionContainer from "./QuestionContainer";
import { getQuestions, submitGame } from "../api/gameService";

import { Question } from "../types";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

const Game = () => {
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userId, setUserId] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [error, setError] = useState<[boolean, string]>([false, ""]);
  const [correctSelection, setCorrectSelection] = useState<boolean>(false);
console.log(correctSelection)
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    const userId = user?.id;
    setUserId(userId);
    const activeGame = localStorage.getItem("activeGame");
    if (activeGame) {
      submitGame(userId, score);
      localStorage.removeItem("activeGame");
      resetQuiz();
    }

    const newGame = async () => {
      try {
        const easyData = await getQuestions("easy");
        const mediumData = await getQuestions("medium");
        const hardData = await getQuestions("hard");
        const combined = [...easyData, ...mediumData, ...hardData];
        setQuiz(combined);
        setCurrentQuestion(combined[0]);
        localStorage.setItem("activeGame", "true");
        setError([false, ""]);
      } catch (error) {
        setError([true, "Error fetching questions"]);
        console.error("Error fetching questions: ", error);
      }
    };
    newGame();
    return () => {
      localStorage.removeItem("activeGame");
    };
  }, []);

  useEffect(() => {
    if (quiz.length > 0 && questionNumber < quiz.length) {
      setCurrentQuestion(quiz[questionNumber]);
    } else if (quiz.length > 0 && questionNumber >= quiz.length) {
      endGame();
    }
  }, [quiz, questionNumber]);

  const updateQuestionNumber = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectSelection(true);
      setQuestionNumber((prev) => prev + 1);
    } else {
      setCorrectSelection(false);
      setQuestionNumber(quiz.length);
    }
  };

  const updateScore = (amount: number) => {
    setScore(amount);
  };

  const resetQuiz = () => {
    setQuiz([]);
    setQuestionNumber(0);
    setScore(0);
    setCurrentQuestion(null);
  };

  const endGame = () => {
    submitGame(userId, score);
    navigate("/leaderboard");
    localStorage.removeItem("activeGame");
    console.log("Game Over!");
  };


  //TODO: Pass props to sidebar
  const toastMessage = error[1];
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed"
      style={{ backgroundImage: `url(${ingameBackdrop})` }}
    >
      <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-end">
        <div className={`flex ${error[0] === true ? 'justify-center' : 'justify-between'} items-center w-full`}>
          <Lifelines score={score} />
          {error[0] && (
            <div className="flex-1 flex justify-center">
              <Toast toastMessage={toastMessage} color="error" />
            </div>
          )}
          <GameInfoSidebar
            roundNumber={questionNumber + 1}
            updateScore={updateScore}
          />
        </div>
        <QuestionContainer
          currentQuestion={currentQuestion}
          updateQuestionNumber={updateQuestionNumber}
        />
      </div>
    </div>
  );
};

export default Game;

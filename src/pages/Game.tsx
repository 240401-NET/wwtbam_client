import { useEffect, useState } from "react";
import ingameBackdrop from "../assets/gamebackdrop.webp";
import GameInfoSidebar from "../components/GameInfoSidebar";
import Lifelines from "../components/Lifelines";
import QuestionContainer from "./QuestionContainer";
import { getQuestions, handleFiftyFifty, submitGame } from "../api/gameService";

import { Question } from "../types";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
import { distributeWeight } from "../helpers";
import AudienceGraph from "../components/AudienceGraph";
import ChatBubble from "../components/ChatBubble";
import DisplayConfetti from "../components/Confetti";

const Game = () => {
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userId, setUserId] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [error, setError] = useState<[boolean, string]>([false, ""]);
  const [correctSelection, setCorrectSelection] = useState<boolean>(false);
  const [incorrectOptions, setIncorrectOptions] = useState<string[]>([]);
  const [updatedIncorrect, setUpdatedIncorrect] = useState<string[]>([]);
  const [chosenLifeline, setChosenLifeline] = useState<string>("");
  const [usedPhoneAFriend, setUsedPhoneAFriend] = useState<boolean>(false);
  const [correct, setCorrect] = useState<string>("");
  const [options, setOptions] = useState<[string, boolean][]>([]);
  const [completedGame, setCompletedGame] = useState< boolean>();
  const [audienceData, setAudienceData] = useState<
    Array<{ name: string; value: number }>
  >([]);
  console.log(correctSelection);
  console.log(chosenLifeline);

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
        setIncorrectOptions(combined[0]?.incorrectAnswers || []);
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
  console.log("quiz: ", quiz);
  useEffect(() => {
    if (quiz.length > 0 && questionNumber < quiz.length) {
      const newQuestion = quiz[questionNumber];
      setCurrentQuestion(newQuestion);
      setIncorrectOptions(newQuestion.incorrectAnswers || []);
      console.log(currentQuestion);
      console.log(incorrectOptions);
    } else if (quiz.length > 0 && questionNumber >= quiz.length) {
      endGame();
    }
  }, [quiz, questionNumber]);

  const updateQuestionNumber = (isCorrect: boolean) => {
    if (audienceData) {
      setAudienceData([]);
    }
    if (updatedIncorrect.length > 0) {
      setUpdatedIncorrect([]);
    }
    if (usedPhoneAFriend) {
      setUsedPhoneAFriend(false);
    }
    if (isCorrect && questionNumber === quiz.length) {
      setScore(1000000)
      setCompletedGame(true);
    }

    if (isCorrect) {

      setCorrectSelection(true);
      setQuestionNumber((prev) => prev + 1);
    } else {
      setCorrectSelection(false);
      setQuestionNumber(quiz.length);
    }
  };

  const handlePhoneAFriend = () => {
    const correct = currentQuestion?.correctAnswer;
    setCorrect(correct!);
    setUsedPhoneAFriend(true);
  }

  const handleChosenLifeline = (lifeline: string) => {
    setChosenLifeline(lifeline); //whatever the case is in lifeline will be returned
    switch (lifeline) {
      case "fiftyFifty": {
        const optionsToModify = [...incorrectOptions];
        const modifiedOptions = handleFiftyFifty(optionsToModify);
        setUpdatedIncorrect(modifiedOptions);
        console.log("updatedIncorrect: ", updatedIncorrect);
        break;
      }
      case "audience": {
        updateAudienceData();
        break;
      }
      case "phoneAFriend":
        handlePhoneAFriend();
        break;
      default:
        break;
    }
  };
  const updateScore = (amount: number) => {
    setScore(amount);
  };

  const handleChoicesInfo = (choices: [string, boolean][]) => {
    setOptions(choices);
  };

  //attaches the randomized letter to the option and whether or not it's the answer ex: ['A', true]
  const updateAudienceData = () => {
    const question = questionNumber + 1;
    const newAudienceData = distributeWeight(options, question);
    console.log("newAudienceData: ", newAudienceData);
    console.log("type: ", typeof newAudienceData);
    const data = Object.entries(newAudienceData).map(([name, count]) => ({
      name,
      value: count,
    }));
    setAudienceData(data);
  };

  const resetQuiz = () => {
    setQuiz([]);
    setQuestionNumber(0);
    setScore(0);
    setCurrentQuestion(null);
    setCompletedGame(false);
  };

  const endGame = () => {
    submitGame(userId, score);
    navigate("/leaderboard");
    localStorage.removeItem("activeGame");
    console.log("Game Over!");
  };

  const toastMessage = error[1];
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed"
      style={{ backgroundImage: `url(${ingameBackdrop})` }}
    >
      <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-end">
        <div
          className={`flex ${
            error[0] === true ? "justify-center" : "justify-between"
          } items-center w-full`}
        >
          <Lifelines
            score={score}
            handleChosenLifeline={handleChosenLifeline}
          />
          {completedGame ? (
            <>
          <DisplayConfetti />
          <div className="w-full text-white text-4xl text-center">CONGRATULATIONS!!</div>
          </>
        ) : (
          null
        )}
          {error[0] && (
            <div className="flex-1 flex justify-center">
              <Toast toastMessage={toastMessage} color="error" />
            </div>
          )}
          {usedPhoneAFriend === true && (
            <div className="">
              <ChatBubble correct={correct} />
            </div>
          )}
          {audienceData.length > 0 ? (
            <AudienceGraph data={audienceData} />
          ) : null}
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
          handleChoicesInfo={handleChoicesInfo}
          incorrectOptions={updatedIncorrect}
        />
      </div>
    </div>
  );
};

export default Game;

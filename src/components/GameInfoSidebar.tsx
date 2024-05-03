import { useEffect } from "react";
import { RoundValueProps } from "../types";
import LadderRung from "./LadderRung";

const GameInfoSidebar = ({
  roundNumber,
  updateScore,
}: {
  roundNumber: number;
  updateScore: (score: number) => void;
}) => {
  useEffect(() => {
    updateQuestionScore();
  }, [roundNumber]);
  
  const roundValue: RoundValueProps = {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 2000,
    7: 4000,
    8: 8000,
    9: 16000,
    10: 32000,
    11: 64000,
    12: 125000,
    13: 500000,
    14: 750000,
    15: 1000000,
  };

  const updateQuestionScore = () => {
    const amount = roundValue[roundNumber - 1] || 0;
    updateScore(amount);
  };

  return (
    <div className=" flex flex-col mt-12 gap-y-6 bg-black bg-opacity-70 w-72 border border-4 border-sky-400 rounded-xl">
      <div className="py-6 flex flex-col gap-y-2">
        <LadderRung
          round={15}
          completed={roundNumber > 15}
          amount={1000000}
          active={roundNumber === 15}
        />
        <LadderRung
          round={14}
          completed={roundNumber > 14}
          amount={750000}
          active={roundNumber === 14}
        />
        <LadderRung
          round={13}
          completed={roundNumber > 13}
          amount={500000}
          active={roundNumber === 13}
        />
        <LadderRung
          round={12}
          completed={roundNumber > 12}
          amount={125000}
          active={roundNumber === 12}
        />
        <LadderRung
          round={11}
          completed={roundNumber > 11}
          amount={64000}
          active={roundNumber === 11}
        />
        <LadderRung
          round={10}
          completed={roundNumber > 10}
          amount={32000}
          active={roundNumber === 10}
        />
        <LadderRung
          round={9}
          completed={roundNumber > 9}
          amount={16000}
          active={roundNumber === 9}
        />
        <LadderRung
          round={8}
          completed={roundNumber > 8}
          amount={8000}
          active={roundNumber === 8}
        />
        <LadderRung
          round={7}
          completed={roundNumber > 7}
          amount={4000}
          active={roundNumber === 7}
        />
        <LadderRung
          round={6}
          completed={roundNumber > 6}
          amount={2000}
          active={roundNumber === 6}
        />
        <LadderRung
          round={5}
          completed={roundNumber > 5}
          amount={500}
          active={roundNumber === 5}
        />
        <LadderRung
          round={4}
          completed={roundNumber > 4}
          amount={400}
          active={roundNumber === 4}
        />
        <LadderRung
          round={3}
          completed={roundNumber > 3}
          amount={300}
          active={roundNumber === 3}
        />
        <LadderRung
          round={2}
          completed={roundNumber > 2}
          amount={200}
          active={roundNumber === 2}
        />
        <LadderRung
          round={1}
          completed={roundNumber > 1}
          amount={100}
          active={roundNumber === 1}
        />
      </div>
    </div>
  );
};

export default GameInfoSidebar;

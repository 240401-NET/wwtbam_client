import React from "react";
import { FaDiamond } from "react-icons/fa6";
import { LadderRungProps } from "../types";

const LadderRung: React.FC<LadderRungProps> = ({
  amount,
  round,
  completed,
  active,
}) => {
  return (
    <div className="hover:bg-amber-500">
      <div
        className={`flex justify-between  ${completed ? "text-white" : ""} ${
          active ? "text-white bg-amber-500" : null
        } text-2xl font-semibold tracking-widest text-amber-500 pl-4 pr-8`}
      >
        <p>{round}</p>
        {completed ? <FaDiamond className="text-white" /> : null}
        <p>${amount}</p>
      </div>
    </div>
  );
};

export default LadderRung;

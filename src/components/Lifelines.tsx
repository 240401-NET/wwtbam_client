import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { LifelinesProps } from "../types";

const Lifelines: React.FC<LifelinesProps> = ({
  score,
  handleChosenLifeline,
}) => {
  const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
  const [usedAudience, setUsedAudience] = useState(false);
  const [usedPhoneAFriend, setUsedPhoneAFriend] = useState(false);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    const name = JSON.parse(user!).userName;
    setUserName(name);
  });

  const buttonClass =
    "border border-8 border-sky-400 rounded-full bg-black p-4 flex items-center text-4xl w-32 h-32 justify-center hover:scale-110 hover:border-white hover:bg-sky-400 hover:border-8 hover:ease-in-out hover:cursor-pointer";

  const handleLifelineUsage = (lifeline: string) => {
    switch (lifeline) {
      case "fiftyFifty":
        handleChosenLifeline(lifeline);
        setUsedFiftyFifty(true);
        break;
      case "audience":
        handleChosenLifeline(lifeline);
        setUsedAudience(true);
        break;
      case "phoneAFriend":
        handleChosenLifeline(lifeline);
        setUsedPhoneAFriend(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex flex-col pt-4 justify-evenly pr-6 gap-y-12 pl-4">
        <div>
          <p className="text-amber-500 text-center font-bold text-3xl pb-2">
            {userName}
          </p>
          <p className="text-amber-500 text-center font-bold text-3xl">
            ${score}
          </p>
        </div>
        {!usedFiftyFifty ? (
          <button
            className={buttonClass}
            onClick={() => handleLifelineUsage("fiftyFifty")}
          >
            <p className="text-white  text-3xl font-bold">50/50</p>
          </button>
        ) : (
          <div className="relative">
            <button className={buttonClass} disabled={usedFiftyFifty}>
              <p className="text-white  text-3xl font-bold">50/50</p>
            </button>
            <ImCross className="text-red-500 text-8xl absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        )}
        {!usedAudience ? (
          <button
            className={buttonClass}
            onClick={() => handleLifelineUsage("audience")}
          >
            <FaUsers className="text-white text-6xl" />
          </button>
        ) : (
          <div className="relative">
            <button className={buttonClass} disabled={usedAudience}>
              <FaUsers className="text-white text-6xl" />
            </button>
            <ImCross className="text-red-500 text-8xl absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        )}
        {!usedPhoneAFriend ? (
          <button
            className={buttonClass}
            onClick={() => handleLifelineUsage("phoneAFriend")}
          >
            <FaUsers className="text-white text-6xl" />
          </button>
        ) : (
          <div className="relative">
            <button className={buttonClass} disabled={usedPhoneAFriend}>
              <FaPhoneVolume className="text-white text-6xl" />
            </button>
            <ImCross className="text-red-500 text-8xl absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        )}
      </div>
    </>
  );
};

export default Lifelines;

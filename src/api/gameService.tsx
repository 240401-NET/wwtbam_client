import axios from "axios";
import { GameProps } from "../types";

const baseUrl = "https://wwtbam.azurewebsites.net/api/Game";

export const getQuestions = async (difficulty: string) => {
  const response = await axios.get(
    "https://the-trivia-api.com/api/questions",
    {
      params: {
        limit: 5,
        difficulty: difficulty,
      },
    }
  );
  console.log("RES ", response.data)
  const data = response.data;
  return data;
};

export const submitGame = async (UserId: string, Score: number) => {
  console.log("UserId: ", UserId)
  console.log("Score: ", Score)
  try {
    const response = await axios.post<GameProps>(
      baseUrl,
      {
        UserId: UserId,
        Score: Score,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    console.log("RES ", response.data)

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errMessage = error.response?.data.message;
      console.log(errMessage)
      throw new Error(errMessage);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const handleFiftyFifty = (options: string[]) => {
  console.log("options before: ", options);
  if (options.length > 1) {
    const copy = [...options];
    const randomIndex = Math.floor(Math.random() * 3)
    copy.splice(randomIndex, 1);
    console.log("options after: ", copy);
    return copy
  }  
  console.log("options: ", options);
  return options;
};




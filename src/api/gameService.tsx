import axios from "axios";

import { GameProps } from "../types";

const baseUrl = "/api/Game";

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
  const data = response.data;
  return data;
};

export const submitGame = async (UserId: string, Score: number) => {
  try {
    const data = await axios.post<GameProps>(
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
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errMessage = error.response?.data.message;
      throw new Error(errMessage);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

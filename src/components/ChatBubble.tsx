import React from "react";
import { ChatBubbleProps } from "../types";

const ChatBubble: React.FC<ChatBubbleProps> = (props: ChatBubbleProps) => {
  const { correct } = props;
  return (
    <>
    <div className="bg-black bg-opacity-70 border border-4 border-sky-400 p-8 rounded-lg">
      <div className="chat chat-start w-full">
        <div className="chat-bubble">
          "I think the answer is {correct}, but I'm not sure. "
        </div>
      </div>
      </div> 
    </>
  );
};

export default ChatBubble;

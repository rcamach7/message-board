import React from "react";
import Image from "next/image";
import Date from "./Date";

export const MessageCard = ({ message, currentUser }) => {
  const { text, timeStamp } = message;
  const { name, image } = message.user;

  return (
    <div
      className={`messageCard flex gap-1 ${
        currentUser ? "justify-end" : "flex-row-reverse justify-end"
      }`}
    >
      <div className="messageCard__text flex flex-col">
        <p className="messageCard__text__name font-semibold text-xs text-gray-600">
          {name}
        </p>
        <div
          className={`messageCard__text__message p-1 rounded-lg ${
            currentUser ? "bg-blue-400" : "bg-gray-200"
          }`}
        >
          <p
            className={`messageCard__text__message__text ${
              currentUser ? "text-white" : "text-black"
            }`}
          >
            {text}
          </p>
        </div>
        <Date dateString={timeStamp} />
      </div>
      <Image
        className="rounded-full"
        src={image}
        alt={name}
        width={50}
        height={50}
      />
    </div>
  );
};

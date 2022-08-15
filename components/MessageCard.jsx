import React from "react";
import Image from "next/image";
import Date from "./Date";

export const MessageCard = ({ message, currentUser }) => {
  const { _id, text, timeStamp } = message;
  const { name, image, email } = message.user;

  return (
    <div className="messageCard flex justify-end gap-1">
      <div className="messageCard__text flex flex-col">
        <p className="messageCard__text__name font-semibold text-xs text-gray-600">
          {name}
        </p>
        <div className="messageCard__text__message bg-blue-400 p-1 rounded-lg">
          <p className="messageCard__text__message__text text-white">{text}</p>
        </div>
        <Date dateString={timeStamp} />
      </div>
      <Image
        className="pr-2 rounded-full"
        src={image}
        alt={name}
        width={50}
        height={50}
      />
    </div>
  );
};

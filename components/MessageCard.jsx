import React from "react";
import Image from "next/image";
import { useEffect } from "react";

export const MessageCard = ({ message, currentUser }) => {
  const { _id, text, timeStamp } = message;
  const { name, image, email } = message.user;

  return (
    <div className="messageCard flex">
      <Image
        className="pr-2 rounded-full"
        src={image}
        alt={name}
        width={50}
        height={50}
      />
      <div className="messageCard__text">
        <div className="messageCard__text__name">{name}</div>
        <div className="messageCard__text__message">{text}</div>
      </div>
    </div>
  );
};

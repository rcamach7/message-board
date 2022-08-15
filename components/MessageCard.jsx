import React from "react";
import Image from "next/image";

export const MessageCard = ({ message }) => {
  const { _id, text, timeStamp } = message;
  const { name, image, email } = message.user;

  console.log(message);
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

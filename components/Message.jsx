import React from "react";

export const Message = ({ message }) => {
  const { text, timeStamp, user } = message;

  return (
    <div>
      <p>{text}</p>
      <p>{timeStamp}</p>
      <p>{user}</p>
    </div>
  );
};

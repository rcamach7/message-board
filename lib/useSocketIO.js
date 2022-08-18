import io from "socket.io-client";
import axios from "axios";
import { useEffect } from "react";

let socket;
export const useSocketIO = (setMessagesCollection) => {
  const socketInitializer = async () => {
    await axios.get("/api/socket");
    socket = io();

    socket.on("update-messages", async () => {
      const { data: messages } = await axios.get("/api/messages");
      console.log(messages);

      setMessagesCollection(messages.reverse());
    });
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  return socket;
};

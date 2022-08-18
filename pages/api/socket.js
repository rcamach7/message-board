import { Server } from "Socket.IO";

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("server connected");
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("new-message", () => {
        socket.emit("update-messages", {});
      });
    });
  }
  res.end();
};

export default SocketHandler;

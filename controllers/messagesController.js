import BoardMessage from "../models/Messages";
import connectMongo from "../utils/connectMongo";

export const getMessages = async () => {
  try {
    await connectMongo();
    const messages = await BoardMessage.find({});

    return Promise.resolve(messages);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postMessage = async (message) => {
  try {
    await connectMongo();
    console.log("connected to mongodb");
    const newMessage = new BoardMessage({
      text: message,
      timeStamp: new Date(),
    });
    console.log("created new message");

    await newMessage.save();
    console.log("saved new message");

    return Promise.resolve(newMessage);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

import BoardMessage from "../models/Messages";
import connectMongo from "../utils/connectMongo";
import { getUserByEmail, addUserMessage } from "./userController";

export const getMessages = async () => {
  try {
    await connectMongo();
    const messages = await BoardMessage.find({});

    return Promise.resolve(messages);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const postMessage = async (email, message) => {
  try {
    await connectMongo();
    await addUserMessage(email, message);

    const user = await getUserByEmail(email);
    const newMessage = new BoardMessage({
      text: message,
      timeStamp: new Date(),
      user: user._id,
    });

    await newMessage.save();

    return Promise.resolve(newMessage);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

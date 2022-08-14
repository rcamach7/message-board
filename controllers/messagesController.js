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
    const newMessage = new BoardMessage({
      text: message,
      timeStamp: new Date(),
    });

    await newMessage.save();

    return Promise.resolve(newMessage);
  } catch (error) {
    return Promise.reject(error);
  }
};

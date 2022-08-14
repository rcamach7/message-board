import Messages from "../models/Messages";
import connectMongo from "../utils/connectMongo";

export const getMessages = async () => {
  try {
    await connectMongo();
    const messages = await Messages.find({});

    return Promise.resolve(messages);
  } catch (error) {
    return Promise.reject(error);
  }
};

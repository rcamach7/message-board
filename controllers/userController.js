import User from "../models/User";
import connectMongo from "../utils/connectMongo";

export const getUsers = async () => {
  try {
    await connectMongo();
    const users = await User.find({});

    return Promise.resolve(users);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const getUserByEmail = async (email) => {
  try {
    await connectMongo();
    const user = await User.findOne({ email });

    return Promise.resolve(user);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const addUserMessage = async (email, message) => {
  try {
    await connectMongo();
    const user = await User.findOneAndUpdate(
      {
        email,
      },
      {
        $push: { messages: { message, timeStamp: new Date() } },
      },
      {
        new: true,
      }
    );

    return Promise.resolve(user);
  } catch (error) {
    console.log(error);
    console.log(error);
    return Promise.reject(error);
  }
};

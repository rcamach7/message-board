import User from "../models/User";
import connectMongo from "../utils/connectMongo";

export const getUsers = async () => {
  try {
    await connectMongo();
    const users = await User.find({});

    return Promise.resolve(users);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUserByEmail = async (email) => {
  try {
    await connectMongo();
    const user = await User.findOne({ email });

    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

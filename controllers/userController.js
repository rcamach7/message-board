import User from "../models/User";
import connectMongo from "../utils/connectMongo";

export const getUsers = async (req, res) => {
  try {
    await connectMongo();
    const users = await User.find({});

    res.json({ users });
  } catch (error) {
    res.status(500).json({ message: "Error getting users" });
  }
};

export const getUser = async (req, res) => {
  const { query } = req;
  const { id } = query;

  try {
    await connectMongo();
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error getting user" });
  }
};

import User from "../models/user";
import crypto from "crypto";
import connectMongo from "../utils/connectMongo";

export async function createUser({ username, password }) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");

  const user = new User({
    username,
    password: hashedPassword,
    salt,
    messages: [],
  });
  await connectMongo();
  await user.save();

  return user;
}

export async function findUser({ username }) {
  await connectMongo();
  const user = await User.findOne({ username });

  return user;
}

export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");

  const passwordsMatch = user.password === inputHash;
  return passwordsMatch;
}

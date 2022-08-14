import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, minLength: 4 },
  email: { type: String, required: true, minLength: 4 },
  image: { type: String, required: true, minLength: 4 },
  messages: [
    {
      message: { type: String, required: true, minLength: 4 },
      timeStamp: { type: Date, required: true },
    },
  ],
  emailVerified: { type: Boolean, required: true },
});

const User = models.User || model("User", userSchema);

export default User;

import { Schema, model, models } from "mongoose";

const boardMessageSchema = new Schema({
  text: { type: String, required: true },
  timeStamp: { type: Date, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const BoardMessage =
  models?.BoardMessage || model("BoardMessage", boardMessageSchema);

export default BoardMessage;

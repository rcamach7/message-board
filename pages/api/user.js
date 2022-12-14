import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import {
  getUserByEmail,
  addUserMessage,
} from "../../controllers/userController";

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) res.status(401).json({ message: "Unauthorized" });

  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const user = await getUserByEmail(session.user.email);
        res.json({ user });
      } catch (error) {
        res.status(500).json({ message: "Error retrieving user" });
      }
      break;
    case "POST":
      try {
        const user = await addUserMessage(session.user.email, req.body.message);
        res.json({ user });
      } catch (error) {
        res.status(500).json({ message: "Error adding message to user" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

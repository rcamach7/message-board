import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import { getMessages, postMessage } from "../../controllers/messagesController";

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) res.status(401).json({ message: "Unauthorized" });

  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const messages = await getMessages();
        res.json({ messages });
      } catch (error) {
        res.status(500).json({ message: "Error retrieving messages" });
      }
      break;
    case "POST":
      try {
        await postMessage(session.user.email, req.body.message);
        const messages = await getMessages();

        res.json(messages);
      } catch (error) {
        res.status(500).json({ message: "Error posting new message" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

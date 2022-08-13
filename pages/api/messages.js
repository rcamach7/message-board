import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  // Protected API endpoint
  if (!session) res.status(401).json({ message: "Unauthorized" });

  res.json({ messages: [{ message: "Hello World" }] });
};

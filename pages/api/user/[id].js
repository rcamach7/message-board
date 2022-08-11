import { getUser } from "../../../controllers/userController";

export default async function (req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      getUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

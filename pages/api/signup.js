import { createUser } from "../../auth/user";
import login from "./login";

export default async function signup(req, res) {
  try {
    await createUser(req.body);

    await login(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).end(error.message);
  }
}

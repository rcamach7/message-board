import { useUserContext } from "../context/UserContext";

export default function Board() {
  const user = useUserContext();

  return <div>You have signed in: {user}</div>;
}

import { useUserContext } from "../context/UserContext";
import { useUser } from "../auth/hooks";
import { useEffect } from "react";

export default function Board() {
  const user = useUser();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return <div>You have signed in</div>;
}

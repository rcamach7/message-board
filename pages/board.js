import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { useRouter } from "next/router";

export default function Board() {
  const user = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (~user) {
      router.push("/");
    }
  }, [user]);

  return <div>User exists</div>;
}

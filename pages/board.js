import { useUser } from "../auth/useUser";
import axios from "axios";

export default function Board() {
  const user = useUser({ redirectTo: "/", redirectIfFound: false });

  const logout = async () => {
    await axios.get("/api/logout");
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1>You are logged in! Hello {user && user.username}</h1>
      <button
        className="text-sm font-extrabold mt-2 p-1 text-blue-400"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

import { useUser } from "../auth/useUser";
import axios from "axios";
import Router from "next/router";
import { Loading } from "../components/Loading";
import { useEffect, useState } from "react";

export default function Board() {
  const [showLoading, setShowLoading] = useState(false);
  const user = useUser();

  const logout = async () => {
    setShowLoading(true);
    try {
      await axios.get("/api/logout");
    } catch (e) {
      console.error(e);
      setShowLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  }, [user]);

  return (
    <div className="Board h-screen w-screen flex flex-col">
      <nav className="navBar flex items-center text-center bg-slate-400 font-bold">
        <h1 className="flex-1">Message Board</h1>
        <button
          onClick={logout}
          className="logoutBtn p-2 border-l-2 border-cyan-900"
        >
          Logout
        </button>
      </nav>

      <div className="messageContainer flex flex-col flex-1">
        <p>This is the message container</p>
      </div>

      <form className="newMessage flex p-2">
        <input
          type="text"
          className="messageInput grow pl-1 text-center border-2 border-gray-400 rounded-lg py-2 px-4 text-lg"
        />
        <button className="sendBtn flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded m-1">
          Send
        </button>
      </form>

      {showLoading && <Loading />}
    </div>
  );
}

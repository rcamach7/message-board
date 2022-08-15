import { Loading } from "../components/Loading";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { getMessages } from "../controllers/messagesController";
import { MessageCard } from "../components/MessageCard";

export default function Board({ messages }) {
  const [messagesCollection, setMessagesCollection] = useState([
    ...JSON.parse(messages),
  ]);
  const [message, setMessage] = useState("");

  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.length) return;
    try {
      const { data: messages } = await axios.post("/api/messages", {
        message,
      });
      console.log(messages);

      setMessagesCollection(messages);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   console.log(messagesCollection);
  // }, [messagesCollection]);

  if (status === "loading") return <Loading />;
  return (
    <div className="Board h-screen w-screen flex flex-col">
      <nav className="navBar flex items-center text-center bg-slate-400 font-bold">
        <h1 className="flex-1">Message Board</h1>
        <button
          onClick={signOut}
          className="logoutBtn p-2 border-l-2 border-cyan-900"
        >
          Logout
        </button>
      </nav>

      <div className="messageContainer flex flex-col flex-1 p-3">
        {messagesCollection.map((message) => (
          <MessageCard key={message._id} message={message} />
        ))}
      </div>

      <form className="newMessage flex p-2" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="messageInput grow pl-1 text-center border-2 border-gray-400 rounded-lg py-2 px-4 text-lg"
        />
        <button className="sendBtn flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded m-1">
          Send
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps() {
  const messages = await getMessages();
  // serialize the messages array to JSON and store it in the props object
  return {
    props: {
      messages: JSON.stringify(messages),
    },
  };
}

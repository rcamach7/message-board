import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [swapForms, setSwapForms] = useState(false);
  const { data: session } = useSession();

  const swapForm = () => {
    setSwapForms(!swapForms);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("/api/messages");
        console.log(data);
      } catch (error) {
        console.error("Error happened while fetching: ", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center text-center font-serif p-1">
      <Head>
        <title>Group Chat </title>
        <meta name="description" content="Group chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold pb-9">Anonymous Group Chat Board</h1>
      <Image
        className="rounded-3xl"
        src="/logo.png"
        height={150}
        width={150}
        alt="logo"
      />

      {session ? (
        <div>
          <p>Email: {session.user.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <p onClick={() => signIn()}>Sign In</p>
      )}
    </div>
  );
}

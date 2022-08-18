import Head from "next/head";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Loading } from "../components/Loading";
import { useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

let socket;
export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession();

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await axios.get("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });
  };

  session?.user && router.push("/board");

  if (status === "loading") return <Loading />;
  return (
    <div className="flex flex-col h-screen items-center justify-center text-center font-serif p-1">
      <Head>
        <title>Group Chat </title>
        <meta name="description" content="Group chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold pb-9">Group Message Board</h1>
      <Image
        className="rounded-3xl"
        src="/logo.png"
        height={150}
        width={150}
        alt="logo"
      />

      <p
        className="p-3 mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded m-1"
        onClick={() => signIn()}
      >
        Sign In
      </p>
    </div>
  );
}

import Head from "next/head";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/board");
    }
  }, [user]);

  return (
    <div className="flex flex-col h-screen items-center justify-center text-center">
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

      <form className="flex flex-col gap-2 w-80">
        <p className="pt-5 font-medium">Sign Up To Enter</p>
        <input
          className="pl-1 text-center border-2 border-gray-400 rounded-lg py-2 px-4 text-lg"
          type="text"
          placeholder="Username"
          required
        />
        <input
          className="pl-1 text-center border-2 border-gray-400 rounded-lg py-2 px-4 text-lg"
          type="password"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

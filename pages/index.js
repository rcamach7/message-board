import Head from "next/head";
import { useUserContext } from "../context/UserContext";
import { useEffect, useState } from "react";
import Router from "next/router";
import Image from "next/image";
import { SignInForm } from "../components/Forms/SignInForm";
import { SignUpForm } from "../components/Forms/SignUpForm";
import { useUser } from "../auth/useUser";
import { Loading } from "../components/Loading";

export default function Home() {
  const user = useUser();

  if (user) {
    Router.push("/board");
  }

  const [loading, setLoading] = useState(true);
  const [swapForms, setSwapForms] = useState(false);

  const swapForm = () => {
    setSwapForms(!swapForms);
  };

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

      {swapForms ? <SignUpForm /> : <SignInForm />}
      <button
        onClick={swapForm}
        className="text-sm font-extrabold mt-2 p-1 text-blue-400"
      >
        {swapForms ? "I have an account already" : "Create New Account"}
      </button>
    </div>
  );
}

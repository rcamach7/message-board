import Head from "next/head";
import { useUserContext } from "../context/UserContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { SignInForm } from "../components/Forms/SignInForm";

export default function Home() {
  const [swapForms, setSwapForms] = useState(false);
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

      {swapForms ? null : <SignInForm />}
    </div>
  );
}

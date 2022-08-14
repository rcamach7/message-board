import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  session?.user && router.push("/board");

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

      <Link className="boardLink font-bold" href="/board">
        Go to message board
      </Link>

      {session ? (
        <div className="signInStatus p-5">
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <p className="p-5" onClick={() => signIn()}>
          Sign In
        </p>
      )}
    </div>
  );
}

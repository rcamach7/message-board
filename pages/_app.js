import "../styles/globals.css";
import { UserContextProvider } from "../context/UserContext";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </SessionProvider>
  );
}

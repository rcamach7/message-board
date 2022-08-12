import { createContext, useContext, useState, useEffect } from "react";
import { useUser } from "../auth/useUser";

export const UserContext = createContext(null);
export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (!userContext) throw new Error("No user context found");

  return userContext;
};

export const UserContextProvider = ({ children }) => {
  let user = useUser();

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

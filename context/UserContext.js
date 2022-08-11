import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext(null);
export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (!userContext) throw new Error("No user context found");

  return userContext;
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    savedUser ? setUser(JSON.parse(savedUser)) : null;
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

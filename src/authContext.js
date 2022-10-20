import { createContext } from "react";

const authContext = createContext({
  currentUser: null,
  setUser: (user) => {},
  logOut: () => {},
});

export default authContext;

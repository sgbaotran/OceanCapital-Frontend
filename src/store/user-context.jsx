import { createContext } from "react";

export const UserContext = createContext({
  name: "User"
})

export default function UserContextProvider({ children }) {
  const userContext = {
    firstName: "Stephen",
    lastName: "Tran"
  }

  return (<UserContext.Provider value={userContext}>
    {children}
  </UserContext.Provider>)
}

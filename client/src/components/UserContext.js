import React, { createContext, useState } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children2 }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([null]);
  return (
    <UserContext.Provider
      value={{
        emailValue,
        setEmailValue,
        passwordValue,
        setPasswordValue,
        users,
        setUsers,
        currentUser,
        setCurrentUser,
      }}
    >
      {children2}
    </UserContext.Provider>
  );
};

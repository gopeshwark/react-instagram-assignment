import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [currentUserProfile, setCurrentUserProfile] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // currentUserProfile(
    //   db
    //     .collection("users")
    //     .where("username", "==", currentUser.username)
    //     .get()
    //     .then((querySnapshot) => {
    //       return !querySnapshot.empty;
    //     })
    // );
  }, []);

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
};

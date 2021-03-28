import firebase from "firebase";
import { FC, createContext, useEffect, useState } from "react";

import appFirebase from "../utils/firebase";

type AuthContextProps = {
  currentUser: firebase.UserInfo | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<
    firebase.UserInfo | null | undefined
  >(undefined);

  useEffect(() => {
    appFirebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

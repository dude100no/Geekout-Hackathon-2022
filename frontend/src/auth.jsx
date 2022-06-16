import { useEffect, useRef } from "react";
import { useContext, useState, createContext } from "react";

const initialUser = {
  isAuthenticated: false
};

export const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  signIn: () => {},
  signOut: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = {
    user,
    isAuthenticated: user !== null,
    signIn: (user) => {
      setUser(user);
    },
    signOut: () => {
      setUser(null);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

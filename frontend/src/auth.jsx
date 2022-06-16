import { useContext, useState, createContext } from "react";

const initialUser = {
  isAuthenticated: true
};

const AuthContext = createContext(initialUser);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = {
    user,
    isAuthenticated: user !== null,
    signIn: (id) => {
      setUser({ id, type: "professional" });
    },
    signOut: () => {
      setUser(initialUser);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

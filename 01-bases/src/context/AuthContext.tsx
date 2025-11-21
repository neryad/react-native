import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

enum AuthStatus {
  "checking" = "checking",
  "authenticated" = "authenticated",
  "unauthenticated" = "unauthenticated",
}

interface AuthState {
  status: AuthStatus;
  toke?: string;
  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAutContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.unauthenticated);
    }, 1500);
  });

  const login = (email: string, password: string) => {
    setUser({
      name: "papto",
      email,
    });

    setStatus(AuthStatus.authenticated);
  };

  const logout = () => {
    setUser(undefined);
    setStatus(AuthStatus.unauthenticated);
  };
  return (
    <AuthContext.Provider
      value={{
        status: status,
        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,
        user: user,
        login,
        logout,
      }}
    >
      {" "}
      {children}
    </AuthContext.Provider>
  );
};

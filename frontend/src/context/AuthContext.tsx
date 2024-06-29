import { ReactNode, createContext, useContext, useState } from "react";

interface IAuthContext {
  number: number;
  function1: () => void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser utilizado dentro de um AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: IAuthProviderProps): JSX.Element => {
  const [number, setNumber] = useState(0);

  const function1 = () => {
    console.log("Mensagem da function" + number + " do authContext");
    setNumber((old) => old + 1);
  }

  return (
    <AuthContext.Provider value={{ number, function1 }}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthProvider,
  useAuth,
};

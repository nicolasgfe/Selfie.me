import { ReactNode, createContext, useContext } from "react";

interface IAuthContext {
  number1: number;
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
  const number1 = 1;

  const function1 = () => {
    console.log("Mensagem da function1 do authContext");
  };

  return (
    <AuthContext.Provider value={{ number1, function1 }}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthProvider,
  useAuth,
};

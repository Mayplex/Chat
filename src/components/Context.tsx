import { createContext, useState } from "react";

interface IContextType {
  isAuth: boolean;
  turnAuthOn: () => void;
  turnAuthOff: () => void;
}

const Context = createContext<IContextType | null>(null);

const ContextProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const turnAuthOn = () => {
    setIsAuth(true);
  };
  const turnAuthOff = () => {
    setIsAuth(false);
  };

  const contextValue: IContextType = {
    isAuth,
    turnAuthOn,
    turnAuthOff,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export { Context, ContextProvider };

import { createContext, useState, useContext } from "react";

export const context = createContext();
export const Provider = ({ children }) => {
  const [firstName, setFirstName] = useState("");

  return (
    <context.Provider value={{ firstName, setFirstName }}>
      {children}
    </context.Provider>
  );
};

export const useSearch = () => {
  const { firstName, setFirstName } = useContext(context);

  return {
    search: (firstName) => {
      setFirstName(firstName);
    },

    firstName: firstName,
  };
};

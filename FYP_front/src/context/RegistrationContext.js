import React, { createContext, useState } from "react";

export const RegistrationContext = createContext();

export const RegistrationContextFunction = (props) => {
  const [register, setRegister] = useState("");

  return (
    <RegistrationContext.Provider value={{ register, setRegister }}>
      {props.children}
    </RegistrationContext.Provider>
  );
};

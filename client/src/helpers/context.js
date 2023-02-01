import React, { createContext, useEffect, useState } from "react";
import axios from "axios"
export const AppContext = createContext();
const Context = (props) => {
  const { children } = props;
  const[userPhone,setUserPhone]=useState("")
 
  


  
 return (
    <AppContext.Provider
    
      value={{userPhone,setUserPhone}}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
import { useState } from "react";
import usercontext from "./usercontext";

const Userprovider = ({ children }) => {
  
    const [user, setUser]=useState([]);
 
    return (
  <usercontext.Provider value={{user ,setUser}}>
    {children}
    </usercontext.Provider>
  )
};

export default Userprovider
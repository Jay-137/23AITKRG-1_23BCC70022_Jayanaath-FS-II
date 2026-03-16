import { useState,useContext,createContext, useEffect } from "react";

const Auth=createContext(null);
export const AuthContext=({children})=>{
 
  const [isLoggedIn,setIsLoggedIn]=useState(()=>{
    const loggedin=localStorage.getItem("loggedIn");
    return loggedin!==null?loggedin==="true":false;
  });
  useEffect(()=>{
    localStorage.setItem("loggedIn",isLoggedIn);
  },[isLoggedIn]);

  return (<Auth.Provider value={{isLoggedIn,setIsLoggedIn}}>
    {children}
  </Auth.Provider>
  );
}
export const useAuth=()=>{
  return useContext(Auth);
}

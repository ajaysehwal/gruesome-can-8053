import { createContext,useState } from "react";

export const AuthContext=createContext();
export default function AuthcontextProvider({children}){
  const [Auth,setAuth]=useState(false);

  const newuser=()=>{
     setAuth(true);
  }
  const out=()=>{
    setAuth(false);
  }
    return(
      <AuthContext.Provider value={{newuser,Auth,out}}>
{children}
      </AuthContext.Provider>
    )

};


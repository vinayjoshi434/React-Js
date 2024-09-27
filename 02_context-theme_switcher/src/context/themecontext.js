import { createContext,useContext } from "react";

// 2ND WAY FOR CONTEXT 
export const themecontext=createContext({
    thememode:"light",
    darktheme:()=>{},
    lighttheme:()=>{}
})

export const ThemecontextProvider=themecontext.Provider

export default function useTheme(){
    return useContext(themecontext)
// DUE TI THIS WE DOESN'T NEED TWO INPORTS EXPLICITLY
}

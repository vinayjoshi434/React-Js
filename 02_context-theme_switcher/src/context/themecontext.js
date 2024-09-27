import { createContext,usecontext } from "react";

// 2ND WAY FOR CONTEXT 
export const themecontext=createContext({
    thememode:"Light",
    darktheme:()=>{},
    lighttheme:()=>{}
})

export const ThemecontextProvider=themecontext.Provider

export default function useTheme(){
    return usecontext(themecontext)
// DUE TI THIS WE DOESN'T NEED TWO INPORTS EXPLICITLY
}

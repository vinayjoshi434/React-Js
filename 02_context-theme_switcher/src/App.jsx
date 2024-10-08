import { useEffect, useState } from "react";


import { ThemecontextProvider } from "./context/themecontext";
import Themebtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {
const[themeMode ,setthemeMode]=useState("light")// statevariable

const toggleTheme=()=>{
    setthemeMode((prev)=>(prev==="light"? "dark":"light"))
}

//basically this runs when thememode changes and this will change the class accordingly
useEffect(()=>{
    document.querySelector("html").classList.remove("dark","light")
    document.querySelector("html").classList.add(themeMode)


},[themeMode])

  return (
    // here we need to wrap this parent component with the ThemeContextprovider in order to provide global access of value in ThemeContextProvider
    <ThemecontextProvider value={{themeMode, toggleTheme}}>{/* themeMode and toggleTheme are accessible globally in entire wrapped components with the help of use state        */}
      <div className="flex flex-wrap min-h-screen items-center ">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme button */}
            
            <Themebtn  />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Caed Ui*/}

            <Card/>
            </div>
        </div>
      </div>
      </ThemecontextProvider>
  );
}

export default App;

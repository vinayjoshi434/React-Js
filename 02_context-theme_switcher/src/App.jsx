import { useState } from "react";


import { ThemecontextProvider } from "./context/themecontext";
import Themebtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {
const[themeMode ,setthemeMode]=useState("light")

  return (
    <ThemecontextProvider value={{themeMode}}>
      <div className="flex flex-wrap min-h-screen items-center ">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme button */}
            <Themebtn/>
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

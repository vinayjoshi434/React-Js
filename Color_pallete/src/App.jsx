import { useRef, useState } from "react";
import colors from "./color_data";
import "./App.css";

function App() {
  const [selectColor, setselectcolor]=useState("");
const [hexcode,sethexcode]=useState("")
//const divref=useRef(null);
  const handelpalletClick=(e)=>{
    const color=e.target.style.backgroundColor
    const hexcode =e.target.dataset.code
          setselectcolor(color);

          sethexcode(hexcode)
console.log(hexcode)
    }
    
         
  
  

  return (
    <>
      <div className="font-bold text-4xl">
        {" "}
        <div className="max-w-xl mx-auto w-full mt-12 rounded-3xl bg-white shadow-2xl border overflow-hidden">
          <div className="p-8 w-full">
            <div className="flex flex-wrap justify-between gap-2 mb-4">
              {colors.map(({ hex, name }) => {
                return (
                  <div
                  data-code={hex}
                    key={name}
                    id="colorSwatches"
                    className="size-8 rounded-full cursor-pointer"
                    style={{ backgroundColor:name}}
                    onClick={handelpalletClick}
                  //  ref={divref}
                  ></div>
                );
              })}
            </div>

              
            <div
              id="selectedColor"
              className="h-32 w-full rounded-xl mt-8"
              style={{backgroundColor:selectColor}}
            ></div>

    <div className="text-center mt-2"><p>{hexcode}</p>
  </div>



            <div className="flex flex-col gap-8 justify-between items-center">
              <span id="colorCode" className="text-gray-500 mt-4"></span>
              <button
                id="copyButton"
                className="rounded-full bg-black px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

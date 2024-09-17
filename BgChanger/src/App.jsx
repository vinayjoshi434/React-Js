import { useState } from "react";


import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className="App"style={{backgroundColor:color}}>
        <div className="colorPallet">
          <button type="button" className="btn btn-primary" onClick={()=>{
            setColor("blue")
           
            
          }}
         >
            Primary
          </button>
          <button type="button"className="btn btn-secondary" onClick={()=>{
            setColor("blue")
           
            
          }}>
            Secondary
          </button>
          <button type="button" className="btn btn-success" onClick={()=>{
            setColor("blue")
           
            
          }}>
            Success
          </button>
          <button type="button" className="btn btn-danger" onClick={()=>{
            setColor("blue")
           
            
          }}>
            Danger
          </button>
          <button type="button" className="btn btn-warning" onClick={()=>{
            setColor("red")
           
            
          }}>
            Warning
          </button>
          <button type="button" className="btn btn-info" onClick={()=>{
            setColor("purple")
           
            
          }}>
            Info
          </button>
          <button type="button" className="btn btn-light" onClick={()=>{
            setColor("aquawhite")
           
            
          }}>
            Light
          </button>
          <button type="button" className="btn btn-dark"  onClick={()=>{
            setColor("#f0f0f0")
           
            
          }}>
            Dark
          </button>

          
        </div>
      </div>
    </>
  );
}

export default App;

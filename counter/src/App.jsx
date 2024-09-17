import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

     const onIncriment=()=>{
        if(count<5){
          
            setCount(count+1)
        }else{
            alert("Increment exceeding limit!")
        }
     }

     const onDecriment=()=>{
        if(count>0 ){
            
            setCount(count-1)
        }else{
            alert("Decrement limit reached!")
        }
     }




  return (
    <>
       <div className="show">{count}</div>
      <div><h2>State Management</h2></div>
      <button type="button" className='btn' onClick={onIncriment}>Increment</button>
      <button  type="button" className="btn" onClick={onDecriment}>Decrement</button>
    </>
  )
}

export default App

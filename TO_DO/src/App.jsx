import { useState ,useEffect} from "react"
import {TodocontextProvider} from "./context";
import {Todo_form, Todo_item} from "./components"


function App() {
  // all these functionalities are passed as a value in a Todocontext Provider in order to make it accesible throubgout the children
    const [Todos, setTodos] = useState([]);// this is basically an array of all Todos



// all these are functionalities have similar name as of initial valur for a context 

  const add_todo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  };

  const update_todo=(id ,todo)=>{
setTodos((prev=>prev.map( (prevtodo)=>(prevtodo.id)===id? todo : prevtodo )))

  }


  const delete_todo=(id)=>{
    setTodos( (prev)=>prev.filter( (prevtodo)=> prevtodo.id!==id))
  }

const toggle_complete=(id)=>{
    setTodos( (prev)=> prev.map( (prevtodo)=> (prevtodo.id===id)
    ? {...prevtodo, completed: !prevtodo.completed} : prevtodo))
}

// local storage for react and javascript is basically a browser local storage
useEffect(()=>{
const todoes=JSON.parse(localStorage.getItem("todos"))
if(todoes && todoes.length>0){
   setTodos(todoes)

}
},[])

useEffect(()=>{
localStorage.setItem("todos" , JSON.stringify(Todos))
},[Todos])



  return (
    <TodocontextProvider value={{Todos, add_todo, update_todo ,delete_todo ,toggle_complete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <Todo_form/>
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
                Todos.map((todoitem)=>(
                    <div className="w-full" key={todoitem.id}>
                              
                             <Todo_item todo={todoitem}/> 
                    </div>
                ))
            }


          </div>
        </div>
      </div>
    </TodocontextProvider>
  );
}

export default App;

import { createContext,useContext } from "react";


export const Todocontext=createContext({
Todos:[
{
    id:1,
    todo_msg:"",
    completed:false

}
],
add_todo:(todo_msg)=>{

},
update_todo:(todo_msg, id)=>{

},
delete_todo:(id)=>{

},
toggle_complete:(id)=>{

}

}
)


export const TodocontextProvider=Todocontext.Provider


export const useTodo=()=>{
    return useContext(Todocontext)
}

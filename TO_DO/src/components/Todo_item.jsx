import React, { useState } from 'react'
import { useTodo } from '../context';

function Todo_item({todo}) {

const{update_todo , toggle_complete, delete_todo}=useTodo()


const [editable, seteditable]=useState(false)
const [todomsg, settodomsg]=useState(todo.todo)

const editTodo=()=>{
update_todo(todo.id , {  ...todo , todo:todomsg})// here we pass a object that spread prev todowhich we get as a prop and then we modify the specific todo property with todomsg
seteditable(false)
}



const toggleCompleted=()=>{
toggle_complete(todo.id)
}

const _delete=()=>{
delete_todo(todo.id)
}

  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
    }`}
>
    <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
    />
    <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
            editable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todomsg}
        onChange={(e) => settodomsg(e.target.value)}
        readOnly={!editable}
    />
    {/*<p>{todo.todo}</p>*/}
    {/* Edit, Save Button */}
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
            if (todo.completed) return;

            if (editable) {
                editTodo();
            } else seteditable((prev) => !prev);
        }}
        disabled={todo.completed}
    >
        {editable ? "📁" : "✏️"}
    </button>
    {/* Delete Todo Button */}
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => _delete(todo.id)}
    >
        ❌
    </button>
</div>
  )
}

export default Todo_item
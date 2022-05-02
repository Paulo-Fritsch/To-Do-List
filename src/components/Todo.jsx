import React, {useState} from "react";
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'
import TodoForm from "./TodoForm";

    function Todo({todos, completeTodo, deleteTodo, editTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const submitEdit = (value) => {
        editTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    };
    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitEdit}/>
    }
    return todos.map((todo, index) => (
        <div 
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index}>
            <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div>
            <AiFillEdit onClick={() => setEdit(
                {
                    id: todo.id, 
                    value: todo.text
                })}/>
            
            <AiOutlineDelete onClick={() => deleteTodo(todo.id)}/>
            </div>
        </div>
    ));
}
  
export default Todo;
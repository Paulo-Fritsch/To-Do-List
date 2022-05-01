import React, {useState} from "react";
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'

    function Todo({todos, completeTodo, deleteTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return todos.map((todo, index) => (
        <div 
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index}>
            <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div>
            <AiFillEdit/>
            <AiOutlineDelete onClick={() => deleteTodo(todo.id)}/>
            </div>
        </div>
    ));
}
  
export default Todo;
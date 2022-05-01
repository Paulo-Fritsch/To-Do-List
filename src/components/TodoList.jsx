import React, {useState} from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)){
            return 
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos);
        console.log(...todos);
    }

    const completeTodo = (id) => {
      let updateTodo = todos.map(todo => {
        if (todo.id === id){
            todo.isComplete = !todo.isComplete
        }
        return todo
      })

      setTodos(updateTodo)
    }

    const deleteTodo = (id) => {
      const newTodo = [...todos].filter(todo => todo.id !== id)
      setTodos(newTodo)
    }
    return (
      <div>
        <h1>Anotações - To Do List</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo 
        todos={todos} 
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        />
      </div>
    );
}
  
  export default TodoList;
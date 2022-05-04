import React, {useState, useEffect, useRef} from "react";

function TodoForm(props) {

  const inputRef = useRef(null)
  useEffect (() =>{
    inputRef.current.focus()
  })

  const[input, setInput] = useState('');

  const handleChange = (e) =>{
    setInput(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    
  }

    return (
      <form className="todo-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Adicione uma Anotação" 
            value={input}
            name='text'
            className="todo-input"  
            onChange={handleChange} 
            ref={inputRef}
          />
          <button className="todo-button">
            Adicionar
          </button>
      </form>
    );
}
  
  export default TodoForm;
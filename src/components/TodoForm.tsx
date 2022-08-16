import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const type = letType => {
    setInput(letType.target.value)
  }

  const StopRefreshing = refresh => {
        refresh.preventDefault()

        props.onSubmit(
            {
                id: Math.floor(Math.random() * 10000), 
                text: input
            }
        )
    }

  return (
    <form className="todo-form" onSubmit={StopRefreshing}>
      <input
        type="text"
        placeholder="Add a todo!"
        value={input}
        name="text"
        className="todo-input"
        onChange={type}
      />
      <button className="add-todo">Add Todo</button>
    </form>
  );
}

export default TodoForm;

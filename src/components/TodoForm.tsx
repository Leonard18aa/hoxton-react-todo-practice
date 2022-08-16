import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

    const StopRefreshing = x => {
        x.preventDefault()
    }

  return (
    <form className="todo-form" onSubmit={StopRefreshing}>
      <input
        type="text"
        placeholder="Add a todo!"
        value={input}
        name="text"
        className="todo-input"
      />
      <button className="add-todo">Add Todo</button>
    </form>
  );
}

export default TodoForm;

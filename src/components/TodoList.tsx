import React, { useState } from "react";
import TodoApp from "./TodoApp";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <h1>Tell me what to do!</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoApp 
      todos={todos}
      type={type}
      />
    </div>
  );
}

export default TodoList;

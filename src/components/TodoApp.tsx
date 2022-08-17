import React, { ReactNode, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  // Some of these long lines of code are just the quick fix vs work and the others are ok
  return todos.map(
    (
      todo: {
        text: ReactNode; isComplete: any; id: React.Key | null | undefined 
},
      index: React.Key | null | undefined
    ) => (
      <div
        className={
          todo.isComplete ? "todo-midleLine complete" : "todo-midleLine"
        }
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
      </div>
    )
  );
}

// this one as well is just a quick fix vs hand but i understand it it just exportin the function and make it a if statment so we have an answare for both cases
export default TodoApp;
function completeTodo(id: any): void {
  throw new Error("Function not implemented.");
}

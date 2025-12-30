import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import type { ITodo } from "./types";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleTodoAdded = (newTodo: ITodo) => {
    setTodos([newTodo, ...todos]);
  };
  const handleTodoUpdated = (updatedTodo: ITodo) => {
    setTodos(todos.map((x) => (x._id === updatedTodo._id ? updatedTodo : x)));
  };
  const handleTodoDeleted = (id: string) => {
    setTodos(todos.filter((x) => x._id !== id));
  };

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm onTodoAdded={handleTodoAdded} />
      <TodoList
        onTodoUpdated={handleTodoUpdated}
        onTodoDeleted={handleTodoDeleted}
      />
    </>
  );
}

export default App;

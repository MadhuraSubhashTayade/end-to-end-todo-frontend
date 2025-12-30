import React, { useEffect } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./redux/slices/todoSlice";
import type { AppDispatch } from "./redux/store";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;

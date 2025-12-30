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
      <h1>TASK MANAGEMENT APP</h1>
      <div className="container">
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
};

export default App;

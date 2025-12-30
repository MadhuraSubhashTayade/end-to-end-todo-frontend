import type React from "react";
import { useEffect, useState } from "react";
import type { ITodo } from "../types";
import { TodoItem } from "./TodoItem";
import { getTodos } from "../services/api";

interface ITodoProps {
  onTodoDeleted: (id: string) => void;
  onTodoUpdated: (todo: ITodo) => void;
}

export const TodoList: React.FC<ITodoProps> = ({
  onTodoDeleted,
  onTodoUpdated,
}: ITodoProps) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  //   const handleDelete = (id: string) => {
  //     setTodos(todos.filter((x) => x._id !== id));
  //   };

  //   const handleUpdate = (todo: ITodo) => {
  //     setTodos(todos.map((x) => (x._id === todo._id ? todo : x)));
  //   };

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onTodoDeleted={onTodoDeleted}
          onTodoUpdated={onTodoUpdated}
        />
      ))}
    </>
  );
};

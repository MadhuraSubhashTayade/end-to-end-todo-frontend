import type React from "react";
import type { ITodo } from "../types";
import { deleteTodo, updateTodo } from "../services/api";

interface TodoProps {
  todo: ITodo;
  onTodoUpdated: (todo: ITodo) => void;
  onTodoDeleted: (id: string) => void;
}

export const TodoItem: React.FC<TodoProps> = ({
  todo,
  onTodoUpdated,
  onTodoDeleted,
}: TodoProps) => {
  const handleToggle = async () => {
    console.log("Update id:", todo._id);
    const updatedTodo = await updateTodo(todo._id, {
      completed: !todo.completed,
    });
    onTodoUpdated(updatedTodo);
  };

  const handleDelete = async () => {
    await deleteTodo(todo._id);
    onTodoDeleted(todo._id);
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

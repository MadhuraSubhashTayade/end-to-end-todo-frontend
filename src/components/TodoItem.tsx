import type React from "react";
import type { ITodo } from "../types";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";
import type { AppDispatch } from "../redux/store";

interface TodoProps {
  todo: ITodo;
}

export const TodoItem: React.FC<TodoProps> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = async () => {
    try {
      await dispatch(
        updateTodo({ id: todo._id, data: { completed: !todo.completed } })
      ).unwrap();
    } catch (err: unknown) {
      console.error("Error updating todo:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteTodo({ id: todo._id })).unwrap();
    } catch (err: unknown) {
      console.error("Error deleting todo:", err);
    }
  };

  return (
    <div className="todo-text">
      <h3 className="">{todo.title}</h3>
      <p>{todo.description}</p>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
      </div>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

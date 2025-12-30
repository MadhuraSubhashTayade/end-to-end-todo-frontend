import type React from "react";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export const TodoList: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todos);

  if (todos.length === 0) {
    return <div className="empty-message">No todos yet. Add one above!</div>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  );
};

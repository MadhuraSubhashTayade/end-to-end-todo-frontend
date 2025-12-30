import React, { useState } from "react";
import type { ITodo } from "../types";
import { createTodo } from "../services/api";

interface TodoProps {
  onTodoAdded: (todo: ITodo) => void;
}

export const TodoForm: React.FC<TodoProps> = ({ onTodoAdded }: TodoProps) => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newTodo: ITodo = await createTodo({ title, description: desc });
      onTodoAdded(newTodo);
      setTitle("");
      setDesc("");
    } catch (error: unknown) {
      console.error(`Error creating todo: ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
      />
      <input
        type="text"
        name="desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Todo description here..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

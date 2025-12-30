import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import type { AppDispatch } from "../redux/store";

export const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await dispatch(addTodo({ title, description: desc })).unwrap();
      setTitle("");
      setDesc("");
    } catch (error: unknown) {
      console.error(`Error creating todo: ${error}`);
    }
  };

  return (
    <div className="form-container">
      <p className="form-title">Task Form</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
          required
        />
        <textarea
          rows={5}
          cols={40}
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Todo description here..."
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { ITodo } from "../../types";
import {
  createTodoApi,
  getTodosApi,
  updateTodoApi,
  deleteTodoApi,
} from "../../services/api";

interface TodoState {
  todos: ITodo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk("/todos/fetchTodos", async () => {
  return await getTodosApi();
});

export const addTodo = createAsyncThunk(
  "/todos/addTodo",
  async (data: Partial<ITodo>) => {
    return await createTodoApi(data);
  }
);

export const updateTodo = createAsyncThunk(
  "/todos/updateTodo",
  async ({ id, data }: { id: string; data: Partial<ITodo> }) => {
    return await updateTodoApi(id, data);
  }
);

export const deleteTodo = createAsyncThunk(
  "/todos/deleteTodo",
  async ({ id }: { id: string }) => {
    return await deleteTodoApi(id);
  }
);

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch todos!";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.unshift(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (x) => x._id === action.payload._id
        );
        if (index !== -1) state.todos[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((x) => x._id !== action.payload._id);
      });
  },
});

export default todoSlice.reducer;

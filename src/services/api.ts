import axios, { AxiosError, type AxiosResponse } from "axios";
import type { ITodo } from "../types";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const getTodos = async (): Promise<ITodo[]> => {
  try {
    const response: AxiosResponse = await api.get("/todos");
    return response.data;
  } catch (error: unknown) {
    throw new Error((error as AxiosError).message);
  }
};

export const getTodoById = async (id: string): Promise<ITodo> => {
  try {
    const response: AxiosResponse = await api.get(`/todos/${id}`);
    return response.data;
  } catch (error: unknown) {
    throw new Error((error as AxiosError).message);
  }
};

export const createTodo = async (data: Partial<ITodo>): Promise<ITodo> => {
  try {
    const response: AxiosResponse = await api.post("/todos", data);
    return response.data;
  } catch (error: unknown) {
    throw new Error((error as AxiosError).message);
  }
};

export const updateTodo = async (
  id: string,
  data: Partial<ITodo>
): Promise<ITodo> => {
  try {
    const response: AxiosResponse = await api.put(`/todos/${id}`, data);
    return response.data;
  } catch (error: unknown) {
    throw new Error((error as AxiosError).message);
  }
};

export const deleteTodo = async (id: string): Promise<ITodo> => {
  try {
    const response: AxiosResponse = await api.delete(`/todos/${id}`);
    return response.data;
  } catch (error: unknown) {
    throw new Error((error as AxiosError).message);
  }
};

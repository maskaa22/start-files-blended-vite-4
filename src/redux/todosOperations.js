import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://637785ab81a568fc2518138f.mockapi.io/api`;

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, thunkAPI) => {
    try {
      const { data: todos } = await axios.get('/todos');
      return todos;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (newTodo, thunkAPI) => {
    try {
      const { data: todo } = await axios.post('/todos', newTodo);
      return todo;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/todos/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

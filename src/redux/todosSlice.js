import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo, editTodo } from './todosOperations';

const initialState = {
  items: [],
  currentTodo: null,
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  initialState,
  name: 'todos',
  reducers: {
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
  },
  extraReducers: builders => {
    builders
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTodos.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(addTodo.pending, state => {
        state.loading = true;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        state.items.splice(index, 1, action.payload);
        state.currentTodo = null;
        state.loading = false;
      })
      .addCase(editTodo.pending, state => {
        state.loading = true;
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.error = action.payload;
      })
  },
});
export const {setCurrentTodo} = todosSlice.actions;

export default todosSlice.reducer;

// export const actions = todosSlice.actions;

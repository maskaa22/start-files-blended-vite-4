import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo } from './todosOperations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  initialState,
  name: 'todos',

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
      });
  },
});

export default todosSlice.reducer;

// export const actions = todosSlice.actions;

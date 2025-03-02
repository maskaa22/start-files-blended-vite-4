import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo, editTodo } from './todosOperations';

const initialState = {
  items: [],
  currentTodo: null,
};

const todosSlice = createSlice({
  initialState,
  name: 'todos',
  reducers: {
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id,
        );
        state.items.splice(index, 1, action.payload);
        state.currentTodo = null;
      });
  },
});
export const { setCurrentTodo } = todosSlice.actions;

export default todosSlice.reducer;

// export const actions = todosSlice.actions;

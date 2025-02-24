import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const todosSlice = createSlice({
  initialState,
  name: 'todos',
  reducers: {
    addTodo: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});
export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;

// export const actions = todosSlice.actions;

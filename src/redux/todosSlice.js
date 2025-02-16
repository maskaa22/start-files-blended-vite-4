import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[]
}

const todosSlice = createSlice({
  initialState,
  name: 'todos',
  reducers: {
    addTodo: (state, {payload}) => {
      state.items.push(payload);
    }
  }
});
export const {
  addTodo
} = todosSlice.actions;

export default todosSlice.reducer;

// export const actions = todosSlice.actions;
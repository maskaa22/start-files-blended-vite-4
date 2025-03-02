import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
      })

      // .addMatcher(
      //   action => action.type.endsWith('pending'),
      //   state => {
      //     state.loading = true;
      //     state.error = null;
      //   },
      // )
      // .addMatcher(
      //   action => action.type.endsWith('fulfilled'),
      //   state => {
      //     state.loading = false;
      //   },
      // )
      // .addMatcher(
      //   action => action.type.endsWith('rejected'),
      //   (state, action) => {
      //     state.loading = false;
      //     state.error = action.payload;
      //   },
      // )

      .addMatcher(
        isAnyOf(
          fetchTodos.pending,
          addTodo.pending,
          deleteTodo.pending,
          editTodo.pending,
        ),
        state => {
          state.loading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(
          fetchTodos.fulfilled,
          addTodo.fulfilled,
          deleteTodo.fulfilled,
          editTodo.fulfilled,
        ),
        state => {
          state.loading = false;
        },
      )
      .addMatcher(
        isAnyOf(
          fetchTodos.rejected,
          addTodo.rejected,
          deleteTodo.rejected,
          editTodo.rejected,
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      );
  },
});
export const { setCurrentTodo } = todosSlice.actions;

export default todosSlice.reducer;

// export const actions = todosSlice.actions;

import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import filterReducer from './filterSlice';
import commonReducer from './commonSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
    common: commonReducer,
  },
});

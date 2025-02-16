import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filterSlice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});
export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;

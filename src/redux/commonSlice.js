import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
};

const commonSlice = createSlice({
  initialState,
  name: 'common',

  extraReducers: builder => {
    builder
      .addMatcher(
        action => action.type.endsWith('pending'),
        state => {
          state.loading = true;
          state.error = null;
        },
      )
      .addMatcher(
        action => action.type.endsWith('fulfilled'),
        state => {
          state.loading = false;
        },
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      );
  },
});

export default commonSlice.reducer;

// export const actions = todosSlice.actions;

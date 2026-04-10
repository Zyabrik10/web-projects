import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './website-init';

export const websiteSlice = createSlice({
  name: 'website',
  initialState,
  reducers: {
    setColor(state, { payload }) {
      state.color = payload.color;
    },
  },
});

export const { setColor } = websiteSlice.actions;
export const websiteReducer = websiteSlice.reducer;

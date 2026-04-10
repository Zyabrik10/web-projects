import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './modals-init';

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleModalWindow(state, { payload }) {
      state[payload.modal] = payload.state;
    },
  },
});

export const { toggleModalWindow } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;

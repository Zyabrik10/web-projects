import { createSlice } from '@reduxjs/toolkit';
import { initialModalValue } from './modal-config';

const modalSlice = createSlice({
  name: 'cars',
  initialState: initialModalValue,
  reducers: {
    openModal(state, { payload: car }) {
      state.isOpened = true;
      state.car = { ...car };
    },
    closeModal(state) {
      state.isOpened = false;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

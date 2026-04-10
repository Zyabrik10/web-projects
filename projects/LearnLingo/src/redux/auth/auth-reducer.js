import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './auth-init';
import { login, signup, logout } from './auth-actions';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.fulfilled, (state, { payload }) => {
        const { user, token } = payload;

        state.isLoggedIn = true;
        state.user = user;
        state.token = token;
      })
      .addCase(signup.rejected, () => {
        console.error('Signup rejected');
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { user, token } = payload;

        state.isLoggedIn = true;
        state.user = user;
        state.token = token;
      })
      .addCase(login.rejected, () => {
        console.error('Login rejected');
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
        state.user = {};
        state.token = '';
      })
      .addCase(logout.rejected, () => {
        console.error('logout rejected');
      });
  },
});

export const authReducer = authSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from 'config/firebaseConfig';

export const signup = createAsyncThunk(
  'auth/signup',
  async (userInfo, thunkAPI) => {
    try {
      const { email: userEmail, password } = userInfo;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        password
      );

      if (!userCredential) throw Error('Unxpected problem');

      const user = userCredential.user;

      const { email, accessToken: token, uid: id } = user;

      const newUser = {
        email,
        id,
      };

      const obj = {
        user: newUser,
        token,
      };

      saveUserInLocalStorage(obj);

      return obj;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userInfo, thunkAPI) => {
    try {
      const { email: userEmail, password } = userInfo;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        userEmail,
        password
      );
      const user = userCredential.user;

      const { email, accessToken: token, uid: id } = user;

      const newUser = {
        email,
        id,
      };

      const obj = {
        user: newUser,
        token,
      };

      saveUserInLocalStorage(obj);

      return obj;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
    removeUserFromLocalStorage();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const saveUserInLocalStorage = user => {
  localStorage.setItem('user-learn-lingo', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user-learn-lingo');
};

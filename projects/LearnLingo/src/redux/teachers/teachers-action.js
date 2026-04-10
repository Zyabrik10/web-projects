import { ref, get, query, limitToFirst } from 'firebase/database';
import { db } from 'config/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTeachers = createAsyncThunk(
  'teachers/getTeachers',
  async (pageSize, thunkAPI) => {
    try {
      const dbRef = ref(db, `/teachers`);
      const teachersRef = query(dbRef, limitToFirst(pageSize));
      const teachers = await get(teachersRef);

      if (!teachers.exists()) throw new Error('No data available');
      return teachers.val();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

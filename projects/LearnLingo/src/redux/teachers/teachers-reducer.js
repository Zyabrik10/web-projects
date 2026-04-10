import { initialState } from './teachers-init';

import { createSlice } from '@reduxjs/toolkit';
import { getTeachers } from './teachers-action';

const taechersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    clearFavTeachers(state) {
      state.favTeachers = [];
    },
    addFavTeacher(state, { payload }) {
      const { user, teacher } = payload;

      const teachers = JSON.parse(localStorage.getItem('favTeachers'));

      const obj = {
        user,
        teacher,
      };

      localStorage.setItem(
        'favTeachers',
        !teachers
          ? JSON.stringify([obj])
          : JSON.stringify([...new Set([...teachers, obj])])
      );

      state.favTeachers.push(obj);
    },

    removeFavTeacher(state, { payload }) {
      const { user, teacher } = payload;

      console.log(user, teacher);

      const teachers = JSON.parse(localStorage.getItem('favTeachers'));

      const newTeachers = teachers.filter(
        ({ user: { id: userId }, teacher: { id: teacherId } }) =>
          !(userId === user.id && teacherId === teacher.id)
      );

      localStorage.setItem('favTeachers', JSON.stringify(newTeachers));

      state.favTeachers = newTeachers;
    },
    initFavTeachers(state, { payload }) {
      const id = payload;

      const favTeachersGlobal = JSON.parse(localStorage.getItem('favTeachers'));
      const favTeachers =
        favTeachersGlobal?.filter(
          ({ user: { id: userId } }) => userId === id
        ) || [];

      state.favTeachers = favTeachers;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTeachers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTeachers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.teachers = payload;
      });
  },
});

export const {
  setLoading,
  clearFavTeachers,
  removeFavTeacher,
  addFavTeacher,
  initFavTeachers,
} = taechersSlice.actions;
export const teachersReducer = taechersSlice.reducer;

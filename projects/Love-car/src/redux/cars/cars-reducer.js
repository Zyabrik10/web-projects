import { createSlice } from '@reduxjs/toolkit';
import { carsInitialValue } from './cars-config';

import {
  getCars,
  filterCars,
  addCars,
  getFavorites,
  toggleFavorite,
  updateCar,
} from './cars-actions';

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialValue,
  extraReducers: builder =>
    builder
      .addCase(getCars.pending, state => {
        state.loading = true;
        console.log('loading');
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cars = payload;
      })
      .addCase(getCars.rejected, state => {
        state.loading = false;
        console.log('rejected');
      })
      .addCase(updateCar.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars].map(car => {
          if (car.id === payload.id) {
            return { ...car, ...payload };
          }
          return car;
        });
      }),
  //   {
  //     [toggleFavorite.fulfilled](state, { payload }) {
  //       if (payload.isFav) {
  //         state.favorites = state.favorites.filter(
  //           ({ carId }) => carId !== payload.id
  //         );
  //       }
  //     },
  //     [getFavorites.pending](state) {
  //       state.isLoading = true;
  //     },
  //     [getFavorites.fulfilled](state, { payload }) {
  //       state.favorites = payload;
  //       state.isLoading = false;
  //     },
  //     [getFavorites.rejected](state) {
  //       state.isLoading = false;
  //     },
  //     [getCars.pending](state) {
  //       state.isLoading = true;
  //     },
  //     [getCars.fulfilled](state, { payload }) {
  //       state.cars = payload;
  //       state.isLoading = false;
  //     },
  //     [getCars.rejected](state) {
  //       state.isLoading = false;
  //     },
  //     [addCars.fulfilled](state, { payload }) {
  //       state.cars.push(...payload);

  //       if (payload.length < 12) state.isButtonShown = false;
  //       else state.isButtonShown = true;
  //     },
  //     [addCars.rejected](state, action) {
  //       console.log('rejected');
  //     },
  //     [filterCars.fulfilled](state, { payload }) {
  //       state.cars = [...payload];

  //       if (payload.length < 12) state.isButtonShown = false;
  //       else state.isButtonShown = true;
  //     },
  //     [filterCars.rejected]() {
  //       console.log('rejected');
  //     },
  //   },
});

export const carsReducer = carsSlice.reducer;

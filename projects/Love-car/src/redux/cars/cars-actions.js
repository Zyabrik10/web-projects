import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars, updateCarById } from 'lib/shared/api';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async ({ page = 1, limit = 12, carsFilters = {} }, thunkAPI) => {
    try {
      const data = await getAllCars(page, limit, carsFilters);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCar = createAsyncThunk(
  'cars/updateCar',
  async ({ id, car: carProps }, thunkAPI) => {
    try {
      const data = await updateCarById(id, carProps);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterCars = createAsyncThunk(
  'cars/filterCars',
  async ({ car, from, to, page = 1, limit = 12 }, thunkAPI) => {
  // try {
  //   const { data } = await api.get(carsAPI.getFiltered(car, page, limit));

    //   const { name: carBrand, price } = car;

    //   if (carBrand === '' && price === 0 && from === 0 && to === 0) return data;

    //   let filteredData = [...data];

    //   if (price !== 0) {
    //     filteredData = filteredData.filter(({ rentalPrice }) => {
    //       let isRel = Number(rentalPrice.split('$')[1]) <= price;

    //       return isRel;
    //     });
    //   }

    //   if (to !== 0 && from <= to) {
    //     filteredData = filteredData.filter(({ mileage }) => {
    //       let isMileage = Number(mileage) >= from && Number(mileage) <= to;

    //       return isMileage;
    //     });
    //   }

    //   return filteredData;
    // } catch (e) {
    //   return thunkAPI.rejectWithValue(e.message);
    // }
  }
);
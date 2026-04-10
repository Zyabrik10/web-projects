import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://69506f3c70e1605a1087dc00.mockapi.io',
});

export const getAllCars = async (page, limit, carsFilters) => {
  let endpoint = `/cars?page=${page}&limit=${limit}`;
  if (Object.keys(carsFilters).length) {
    endpoint += `&${Object.entries(carsFilters)
      .map(([filter, value]) => `${filter}=${value}`)
      .join('&')}`;
  }

  const { data } = await api.get(endpoint);

  return data;
};

export const getCarById = async id => {
  const { data } = await api.get(`/cars/${id}`);

  return data;
};

export const updateCarById = async (id, carsProps) => {
  const { data } = await api.put(`/cars/${id}`, { ...carsProps });

  return data;
};

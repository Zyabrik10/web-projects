import { colors } from 'colors';

export const initialState = {
  color: colors[Math.floor(Math.random() * colors.length)],
};

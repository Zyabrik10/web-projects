import { object, string } from 'yup';

export const userLoginSchema = object({
  password: string().required().min(6, 'password must have at least 6 symbols'),
  email: string().required(),
});

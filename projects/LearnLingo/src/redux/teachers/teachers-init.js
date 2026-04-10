import { user } from '../auth/auth-init';

const favTeachersGlobal = JSON.parse(localStorage.getItem('favTeachers'));
const favTeachers =
  (user &&
    favTeachersGlobal?.filter(
      ({ user: { id: userId } }) => userId === user.user.id
    )) ||
  [];

export const initialState = {
  teachers: [],
  favTeachers: favTeachers,
  isLoading: false,
};

export const user = JSON.parse(localStorage.getItem('user-learn-lingo'));

export const initialState = {
  user: user?.user || {},
  isLoggedIn: !!user,
  token: user?.token || '',
};

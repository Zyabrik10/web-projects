import { configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "./stores";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export * from "./stores";
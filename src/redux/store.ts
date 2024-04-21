import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import registrationBlankSlice from "./registrationBlank/slice";
import filterData from "./filterData/slice";

const store = configureStore({
  reducer: {
    registrationBlank: registrationBlankSlice,
    filterData,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

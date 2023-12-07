import { configureStore } from "@reduxjs/toolkit";
import globalInfoReducer from "./globalInfo";

const store = configureStore({
  reducer: { globalInfo: globalInfoReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

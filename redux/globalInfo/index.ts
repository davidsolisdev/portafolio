import { createSlice } from "@reduxjs/toolkit";
import globalInfoEvent from "./globalInfoEvent";
import GlobalInfoState from "./globalInfoState";

const globalInfoReducer = createSlice({
  name: "globalInfo",
  initialState: GlobalInfoState,
  reducers: globalInfoEvent.reducers,
});

export const { toggleTheme, toggleOpenDrawer } = globalInfoReducer.actions;

export default globalInfoReducer.reducer;

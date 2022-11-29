import { Draft as D, PayloadAction as PA } from "@reduxjs/toolkit";
import type { IGlobalInfoState } from "./globalInfoState";

class GlobalInfoEvent {
  public get reducers() {
    return {
      toggleTheme: this.toggleTheme,
      toggleOpenDrawer: this.toggleOpenDrawer,
    };
  }

  private toggleTheme(
    state: D<IGlobalInfoState>,
    { payload }: PA<"light" | "dark">
  ): IGlobalInfoState {
    state.theme = payload;
    return state;
  }

  private toggleOpenDrawer(
    state: D<IGlobalInfoState>,
    { payload }: PA<boolean>
  ): IGlobalInfoState {
    state.openDrawer = payload;
    return state;
  }
}

export default new GlobalInfoEvent();

export interface IGlobalInfoState {
  theme: string;
  openDrawer: boolean;
}

const GlobalInfoState: IGlobalInfoState = {
  theme: "light",
  openDrawer: false,
};

export default GlobalInfoState;

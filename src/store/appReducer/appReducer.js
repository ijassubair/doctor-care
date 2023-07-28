import { createSlice } from "@reduxjs/toolkit";
import { DefaultThemeColors } from "../../constants/colors/defaultColors";
const initialState = {
  language: "en",
  colors: DefaultThemeColors,
  sideBarOpen: false,
  openMenus: [],
  sideBarMenu: [],
  user: {},
};

export const appSlice = createSlice({
  name: "appVariables",
  initialState,
  reducers: {
    setSideBarState(state, action) {
      state.sideBarOpen = action.payload;
    },
    setOpenMenus(state, action) {
      state.openMenus = action.payload;
    },
    setSideBarMenu(state, action) {
      state.sideBarMenu = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setSideBarState, setOpenMenus, setSideBarMenu, setUser } =
  appSlice.actions;

export const appReducer = appSlice.reducer;

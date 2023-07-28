export const sideBarStateSelector = (state) => state?.appReducer?.sideBarOpen;
export const openMenusSelector = (state) => state?.appReducer?.openMenus;
export const sideBarMenuSelector = (state) => state?.appReducer?.sideBarMenu;
export const checkBoxTypeSelector = (state) =>
  state?.appReducer?.headerCheckBoxType;
export const checkBoxUtilsSelector = (state) =>
  state?.appReducer?.headerCheckBoxUtils;
export const refreshToggler = (state) => state?.appReducer?.refreshToggler;
export const refreshLoading = (state) => state?.appReducer?.refreshLoading;

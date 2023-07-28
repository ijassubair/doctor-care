import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications(state, action) {
      state.notifications = [
        ...state.notifications,
        { key: action.payload.key, ...action.payload },
      ];
    },
    removeNotifications(state, action) {
      state.notifications = state.notifications.filter(
        (notification) => notification.key !== action.payload
      );
    },
    closeNotifications(state, action) {
      state.notifications = state.notifications.map((notification) =>
        action.dismissAll || notification.key === action.key
          ? { ...notification, dismissed: true }
          : { ...notification }
      );
    },
  },
});

export const { setNotifications, removeNotifications, closeNotifications } =
  notificationSlice.actions;
export const notifications = notificationSlice.reducer;

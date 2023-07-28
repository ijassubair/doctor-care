import {
  setNotifications,
  removeNotifications,
  closeNotifications,
} from "./notifierReducer";

export const enqueueSnackbar = (notification) => {
  const key = notification?.options?.key;
  const crypto = window.crypto;
  let array = new Uint32Array(1);
  return setNotifications({
    ...notification,
    key: key || new Date().getTime() + crypto.getRandomValues(array)[0],
  });
};

export const closeSnackbar = (key) =>
  closeNotifications({ dismissAll: !key, key });

export const removeSnackbar = (key) => removeNotifications(key);

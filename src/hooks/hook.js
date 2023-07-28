import { useSelector, useDispatch } from "react-redux";
import i18n from "i18next";

export const useAppDispatch = () => useDispatch();

export const useAppSelector = useSelector;

export const useAppTranslate = (key) => {
  return i18n.t(key);
};

import * as yup from "yup";

import { rgxEmail } from "../../constants/rejex/rejex";

export const loginSchema = (t) =>
  yup.object().shape({
    username: yup
      .string()
      .trim()
      .required(t("user id is Required"))
      .email(t("invalid email"))
      .matches(rgxEmail, t("email valid")),
    password: yup.string().trim().required(t("password required")),
  });

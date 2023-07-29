import * as yup from "yup";

import { rgxEmail } from "../../constants/rejex/rejex";

export const loginSchema = (t) =>
  yup.object().shape({
    username: yup
      .string()
      .trim()
      .required(t("validation.user_id_is_Required"))
      .email(t("validation.invalid_email"))
      .matches(rgxEmail, t("validation.email_valid")),
    password: yup.string().trim().required(t("validation.password_required")),
  });

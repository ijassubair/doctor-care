import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import { removeNotifications } from "./notifierReducer";
let displayed = [];

const Notifier = () => {
  const { t } = useTranslation();

  const messages = {
    "message.otp_send_success": t("message.otp_send_success"),
    "message.otp_resend_success": t("message.otp_resend_success"),
    "message.otp_verify_success": t("message.otp_verify_success"),
    "message.passwords_unmatch": t("message.passwords_unmatch"),
    "message.reset_password_success": t("message.reset_password_success"),
    "message.forgot_password_success": t("message.forgot_password_success"),
    "message.something_went_wrong": t("message.something_went_wrong"),
    "Request failed with status code 401": t("message.session_expired"),
  };

  const dispatch = useDispatch();
  const notifications = useSelector((store) => {
    return store.notifications.notifications || [];
  });
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };

  useEffect(() => {
    notifications.forEach(
      ({ key, message, options = {}, dismissed = false }) => {
        if (dismissed) {
          closeSnackbar(key);
          return;
        }

        if (displayed.includes(key)) return;

        enqueueSnackbar(messages[message] || message, {
          key,
          ...options,
          onClose: (event, reason, myKey) => {
            if (options.onClose) {
              options.onClose(event, reason, myKey);
            }
          },
          onExited: (event, myKey) => {
            dispatch(removeNotifications(myKey));
            removeDisplayed(myKey);
          },
        });

        storeDisplayed(key);
      }
    );
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

  return null;
};

export default Notifier;

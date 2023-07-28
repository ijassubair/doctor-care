import { SnackbarProvider } from "notistack";
import SuccessSnackbar from "./customSnackbars/successSnackbar/successSnackbar";
import StyledMaterialDesignContent from "./snackbarStyledComponents";
import CssBaseline from "@mui/material/CssBaseline";
import Notifier from "../../molecules/notifier";

const CustomSnackbarProvider = ({ children }) => {
  return (
    <SnackbarProvider
      // hideIconVariant
      maxSnack={1}
      preventDuplicate={true}
      autoHideDuration={3000}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        customSuccess: SuccessSnackbar,
      }}
    >
      <CssBaseline />
      <Notifier />
      {children}
    </SnackbarProvider>
  );
};

export default CustomSnackbarProvider;

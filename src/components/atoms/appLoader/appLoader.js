import Backdrop from "@mui/material/Backdrop";
import { appLoaderStyles } from "./useStyles";

export default function AppLoader() {
  return (
    <Backdrop
      id="loaderContainer"
      sx={appLoaderStyles.backdrop}
      open={true}
      onClick={() => null}
    ></Backdrop>
  );
}

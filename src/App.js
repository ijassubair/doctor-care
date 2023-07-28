import { Suspense } from "react";
import { theme as defaultTheme } from "./config/theme";
import Routes from "./routesComponent";
import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import AppLoader from "./components/atoms/appLoader/appLoader";
import CustomSnackbarProvider from "./components/atoms/customSnackbarProvider/customSnackbarProvider";
import "./utils/i18n";
import "./index.css";

const App = () => {
  const appVariables = useSelector((store) => store?.appReducer);
  const newTheme = defaultTheme(appVariables);

  return (
    <StyledEngineProvider injectFirst>
      <Suspense fallback={<AppLoader />}>
        <ThemeProvider theme={newTheme}>
          <CustomSnackbarProvider>
            <Routes />
          </CustomSnackbarProvider>
        </ThemeProvider>
      </Suspense>
    </StyledEngineProvider>
  );
};

export default App;

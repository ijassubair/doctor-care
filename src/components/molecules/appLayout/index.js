import { Outlet } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { appLayoutStyles } from "./useStyles";
import MiniDrawer from "../sideBar/sideBar";
import CustomAppBar from "../appBar/appBar";
import DrawerHeader from "./drawerHeader";

const AppLayout = () => {
  return (
    <Box sx={appLayoutStyles.boxContainer}>
      <CssBaseline />
      <CustomAppBar />
      <MiniDrawer />
      <Box sx={appLayoutStyles.mainBoxContainer}>
        <Box component="main" sx={appLayoutStyles.scrollableContent}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
export default AppLayout;

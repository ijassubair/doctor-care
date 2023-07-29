import { Grid, IconButton, Toolbar } from "@mui/material";
import { sideBarStateSelector } from "../../../store/appReducer/app.selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenMenus,
  setSideBarState,
} from "../../../store/appReducer/appReducer";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "./header";
import { StyledAppBar as AppBar } from "./styledAppBar";
import logo from "../../../images/newLogo.png";
const CustomAppBar = () => {
  const open = useSelector(sideBarStateSelector);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    const drawerNewStatus = !open;
    !drawerNewStatus && dispatch(setOpenMenus([]));
    dispatch(setSideBarState(drawerNewStatus));
  };

  return (
    <AppBar
      position="fixed"
      open={open}
      elevation={2}
      sx={{ color: "black", bgcolor: "white" }}
    >
      <Toolbar>
        <Grid container justifyContent="space-between">
          <Grid item>
            <img src={logo} alt="logo" height="47px" width="130px" />
          </Grid>
          <Grid item>
            <Header />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

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
      elevation={0}
      sx={{ color: "black", bgcolor: "#213555" }}
    >
      <Toolbar>
        <Grid container justifyContent="space-between">
          <Grid item>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                color: "white",
              }}
            >
              <MenuIcon />
            </IconButton>
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

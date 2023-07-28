import { styled } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 0;
const closedDrawerWidth = 0;
export const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "white",
  zIndex: theme.zIndex.drawer + 1,
  width: `calc(100% - ${closedDrawerWidth}px)`,

  marginLeft: theme.spacing(7),
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

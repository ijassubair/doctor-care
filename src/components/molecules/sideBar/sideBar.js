import * as React from "react";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom"; // Import the useLocation hook
import { Drawer, DrawerHeader } from "./styledSideBar";
import { sideBarStateSelector } from "../../../store/appReducer/app.selectors";
import { sidebarMenus } from "./menus";
import { sidebarStyles } from "./useStyles";

export default function MiniDrawer() {
  const open = useSelector(sideBarStateSelector);
  const location = useLocation(); // Get the current location
  const navigate = useNavigate();

  const handleClick = (idVal) => {
    navigate(`${idVal.path}`);
  };

  const renderMenuItems = () => {
    return sidebarMenus.map((menu) => (
      <React.Fragment key={menu.id}>
        <ListItem
          id={menu.id}
          onClick={() => handleClick(menu)}
          button
          sx={
            location.pathname === menu.path
              ? sidebarStyles.selectedMenuItem
              : sidebarStyles.menuItem
          }
        >
          <ListItemIcon sx={{ color: "white" }}>{menu.icon}</ListItemIcon>
          <ListItemText primary={menu.label} />
        </ListItem>
      </React.Fragment>
    ));
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        "& .MuiPaper-root": {
          bgcolor: "#213555",
          color: "white",
        },
      }}
    >
      <DrawerHeader sx={{ maxHeight: "50px" }}>Logo</DrawerHeader>
      <List>{renderMenuItems()}</List>
    </Drawer>
  );
}

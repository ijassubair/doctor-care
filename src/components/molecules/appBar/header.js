import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DrawerFromRight from "../DrawerFromRight";
import { Navigate, useNavigate } from "react-router";

const settings = ["Logout"];
const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Grid container>
          <Grid item sx={{ padding: 1 }}>
            <DrawerFromRight />
          </Grid>

          <Grid item sx={{ padding: 1, marginLeft: "1rem" }}>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0.5, background: "grey", color: "white" }}
                >
                  RK
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate("/sign-in")}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;

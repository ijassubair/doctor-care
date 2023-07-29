import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import PatientRegister from "../../pages/doctor/register/PatientRegister";
import UpdateDashboard from "../../pages/doctor/register/UpdateDashboard";

export default function DashboardUpdate() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
  };

  return (
    <div>
      <Button
        sx={{ background: "#FFFFFF", color: "black" }}
        variant="contained"
        onClick={handleDrawerOpen}
      >
        Update Dashboard
      </Button>

      <Drawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer("right", false)}
        sx={{ maxWidth: "100px" }}
      >
        <UpdateDashboard setOpen={setOpen} />
      </Drawer>
    </div>
  );
}

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import PatientRegister from "../../pages/doctor/register/PatientRegister";

export default function DrawerFromRight() {
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
        sx={{ background: "#3C46BD" }}
        variant="contained"
        onClick={handleDrawerOpen}
      >
        New Patient Register
      </Button>

      <Drawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer("right", false)}
        sx={{ maxWidth: "100px" }}
      >
        <PatientRegister setOpen={setOpen} />
      </Drawer>
    </div>
  );
}

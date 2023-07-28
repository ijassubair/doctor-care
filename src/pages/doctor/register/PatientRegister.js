import { Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const PatientRegister = ({ setOpen }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Grid container sx={{ maxWidth: "50vw" }}>
      <Grid item>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4} p={5}>
            <Grid item xs={12} onClick={() => setOpen(false)}>
              <Typography fontSize="25px" textAlign="right">
                X
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize="20px">New Patient Registration</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                name="name"
                label="Patient Full Name"
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="age"
                id="age"
                label="Age"
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="gender"
                id="age"
                label="Gender"
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phone"
                id="phone"
                label="Phone"
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="place"
                id="place"
                label="Place"
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ background: "#3C46BD" }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default PatientRegister;

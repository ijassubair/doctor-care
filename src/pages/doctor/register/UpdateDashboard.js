import { Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const UpdateDashboard = ({ setOpen }) => {
  const {
    handleSubmit,
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
              <Typography fontSize="20px">Rx,</Typography>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item xs={12}>
                  <Typography>Last Visit</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="Last Vist"
                    id="age"
                    type="date"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item xs={12}>
                  <Typography>Next Visit</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="Next visit Recommended"
                    id="age"
                    type="date"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ marginTop: "2rem", borderTop: "2px solid black" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Medicine Prescription: 1</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="gender"
                    id="age"
                    label="Medicine Name"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="gender"
                    id="age"
                    label="Dosage"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="gender"
                    id="age"
                    label="Dosage schedule"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ marginTop: "2rem", borderTop: "2px solid black" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Medicine Prescription: 2</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="gender"
                    id="age"
                    label="Medicine Name"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="gender"
                    id="age"
                    label="Dosage"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    paddingBottom: "2rem",
                    borderBottom: "2px solid black",
                  }}
                >
                  <TextField
                    name="gender"
                    id="age"
                    label="Dosage schedule"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} alignItems="right">
              <Button variant="outlined">Add Another Prescription +</Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phone"
                id="phone"
                label="Note to Pateint"
                variant="outlined"
                sx={{ width: "100%" }}
                rows={5}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="place"
                id="place"
                label="Doctor Note"
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
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default UpdateDashboard;

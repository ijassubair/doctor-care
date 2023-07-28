import { Grid, Typography } from "@mui/material";

const NoMatch = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5">404 | Page Not Found</Typography>
    </Grid>
  );
};

export default NoMatch;

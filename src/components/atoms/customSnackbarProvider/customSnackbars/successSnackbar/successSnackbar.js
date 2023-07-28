import { Grid } from "@mui/material";
import { SnackbarContent } from "notistack";
import React from "react";

const SuccessSnackbar = React.forwardRef((props, ref) => {
  const { id, message, allowDownload, ...other } = props;

  return (
    <SnackbarContent
      ref={ref}
      role="alert"
      {...other}
      style={{ justifyContent: "flex-end" }}
    >
      <Grid style={{ backgroundColor: "purple", margin: 0, padding: 0 }}>
        {message}
      </Grid>
    </SnackbarContent>
  );
});

export default SuccessSnackbar;

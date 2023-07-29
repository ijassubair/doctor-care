import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginStyles } from "./useStyles";
import logo from "../../images/newLogo.png";
import { loginSchema } from "./Schema";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import bg from "../../images/bgDoctor.png";
const SignIn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm({
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(loginSchema(t)),
  });

  const onSubmit = (data) => {
    setLoading(true);
    navigate("/home");
    // dispatch(callSignin(data, navigate)).finally(() => setLoading(false));
  };
  return (
    <Grid container>
      <Grid item lg={4} sx={loginStyles.leftContainer}>
        {/* <img src={bg} alt="logo" /> */}
      </Grid>
      <Grid item lg={8} sx={loginStyles.rightContainer}>
        <Grid container justifyContent="center">
          <Grid item>
            <form
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
              data-testid="login-form"
            >
              <Grid container sx={loginStyles.rightContentSection}>
                <Grid item xs={12}>
                  <img style={loginStyles.logo} src={logo} alt="logo" />
                </Grid>

                <Grid item xs={12} mt={2}>
                  <Controller
                    name="username"
                    defaultValue=""
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        sx={loginStyles.textfield}
                        label={"Username"}
                        value={value}
                        onChange={onChange}
                        autoComplete="none"
                        id="username"
                        name="username"
                        variant="outlined"
                        error={!!error}
                        fullWidth
                        margin="normal"
                        autoFocus
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    defaultValue=""
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        sx={loginStyles.textfield}
                        label={"password"}
                        value={value}
                        onChange={onChange}
                        autoComplete="none"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        variant="outlined"
                        error={!!error}
                        fullWidth
                        margin="normal"
                        helperText={error ? error.message : null}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              style={{ outline: "none" }}
                            >
                              {
                                <IconButton
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <VisibilityIcon></VisibilityIcon>
                                  ) : (
                                    <VisibilityOffIcon></VisibilityOffIcon>
                                  )}
                                </IconButton>
                              }
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </Grid>

                <Grid item mt={4} xs={12}>
                  <Button
                    variant="contained"
                    fullWidth={true}
                    type="submit"
                    disabled={loading}
                    sx={{ background: "#3C46BD" }}
                  >
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "signin"
                    )}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;

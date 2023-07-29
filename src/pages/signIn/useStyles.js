import bg from "../../images/bgPatient.png";
export const loginStyles = {
  leftContainer: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    height: "100vh",
    display: { xs: "none", md: "none", lg: "block" },
  },
  rightContainer: {
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
  },
  rightContentSection: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "35vw",
    minWidth: "300px",
  },
  signInButton: {
    background: (theme) => theme.palette.button.main,
    color: (theme) => theme.palette.text.primary,
  },
  leftMainText: {
    fontFamily: "Aeonik",
    color: "#FFFFFF",
    fontSize: "48px",
    width: "432px",
    height: "168px",
  },
  leftSubText: {
    color: "var(--background-paper-elevation-0, #F4F1EA)",
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 1,
    "@media (max-height:600px)": {
      fontSize: "20px",
    },
    "@media only screen and (min-height: 601px) and (max-height: 900px)": {
      fontSize: "36px",
    },
    "@media only screen and (min-height: 900px)": {
      fontSize: "56px",
    },
  },

  fullHeightAndWidth: {
    height: "100%",
    width: "100%",
  },
  logo: {
    width: "155px",
  },
  blackInfoText: {
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: " 133.4%",
    color: "#262626",
    paddingBottom: "8px",
    width: "100%",
  },
  blackInfoSubText: {
    fontWeight: 200,
    fontSize: "16px",
    lineHeight: " 13.4%",
    color: (theme) => theme.palette.text.subTextGrey,
    paddingBottom: "3px",
    width: "100%",
    textDecoration: "none",
  },
  blackInfoLinkText: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: " 1%",
    color: (theme) => theme.palette.text.green,
    width: "100%",
  },
  textfield: {
    "input::-ms-reveal": {
      display: "none",
    },
    "input::-ms-clear": {
      display: "none",
    },
  },
};

import { Grid } from "@mui/material";
import MuiTable from "../../../components/molecules/table/MuiTable";

const Home = () => {
  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <SearchField placeholder={"Search Patient..."} /> */}
          </Grid>
          <Grid item xs={12}>
            <MuiTable tableMaxHeight={"66vh"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container style={{ height: "100%" }} spacing={2}>
          <Grid item xs={12}>
            {/* <SearchField placeholder={"Search Patient..."} /> */}
          </Grid>
          <Grid item xs={12}>
            <MuiTable tableMaxHeight={"36vh"} />
          </Grid>
          <Grid item xs={12}>
            <MuiTable tableMaxHeight={"21vh"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;

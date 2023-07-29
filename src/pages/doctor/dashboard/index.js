import { Button, Grid, Paper, Typography } from "@mui/material";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import DashboardUpdate from "../../../components/molecules/DashboardUpdate";

const Dashboard = () => {
  var tableStyle = {
    border: "1px solid black",
    padding: "8px",
  };

  const data = [
    { name: "28/05/2023", uv: "550", pv: "250" },
    { name: "28/05/2023", uv: "400", pv: "240" },
    { name: "28/05/2023", uv: "350", pv: "220" },
    { name: "28/05/2023", uv: "100", pv: "210" },
    { name: "28/05/2023", uv: "360", pv: "250" },
  ];
  return (
    <Grid container spacing={1.5}>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography fontSize="20px">Dashboard</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <DashboardUpdate />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ background: "#FFFFFF", color: "black" }}
                >
                  Export as PDF
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ height: "8vh", p: 2 }}>
          <Grid container justifyContent="space-between">
            <Grid item>Name : ijas</Grid>
            <Grid item>Age : 24</Grid>
            <Grid item>Patient ID : ID987765677</Grid>
            <Grid item>Gender : Male</Grid>
            <Grid item>Blood Group : B+</Grid>
            <Grid item>Height: 172cm</Grid>
            <Grid item>Weight : 72</Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={1.5}>
          <Grid item xs={6}>
            <Paper sx={{ height: "64vh", p: 2 }}>
              <Grid container justifyContent="space-between" spacing={1.5}>
                <Grid item xs={6}>
                  Last visted: 25 jan 2023
                </Grid>
                <Grid item xs={6}>
                  Next visit : 21 Feb 2023
                </Grid>
                <Grid item>Last Prescription : </Grid>
                <Grid item xs={12}>
                  <table>
                    <th style={tableStyle}>Medicine Name</th>
                    <th style={tableStyle}>Dosage</th>
                    <th style={tableStyle}>Frequency</th>
                    <tbody style={tableStyle}>
                      <tr>
                        <td style={tableStyle}>Paracetamol</td>
                        <td style={tableStyle}>500</td>
                        <td style={tableStyle}> 1-1-1</td>
                      </tr>
                      <tr>
                        <td style={tableStyle}>Dablo 88</td>
                        <td style={tableStyle}>350ph</td>
                        <td style={tableStyle}>0-1-0</td>
                      </tr>{" "}
                      <tr>
                        <td style={tableStyle}>Carolose</td>
                        <td style={tableStyle}>500</td>
                        <td style={tableStyle}>0-1-0</td>
                      </tr>
                    </tbody>
                  </table>
                </Grid>
                <Grid item>
                  <LineChart width={700} height={180} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                  </LineChart>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper sx={{ height: "64vh", p: 2 }}>
              <Grid container spacing={1}>
                <Grid item>Test Details</Grid>
                <Grid item xs={12}>
                  <table>
                    <th style={tableStyle}>Test Name</th>
                    <th style={tableStyle}>Date</th>
                    <th style={tableStyle}>Result Summary</th>
                    <tbody style={tableStyle}>
                      <tr>
                        <td style={tableStyle}>PCH</td>
                        <td style={tableStyle}>28/05/2023</td>
                        <td style={tableStyle}>
                          small variation, variation in janjjdhh rayiosu
                        </td>
                      </tr>
                      <tr>
                        <td style={tableStyle}>Uricacid</td>
                        <td style={tableStyle}>01/05/2023</td>
                        <td style={tableStyle}>
                          Actual value, variation in janjjdhh patdeec
                        </td>
                      </tr>{" "}
                      <tr>
                        <td style={tableStyle}>tcH</td>
                        <td style={tableStyle}>08/05/2023</td>
                        <td style={tableStyle}>
                          Normal, variation in janjjdhh Uragoap
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Grid>
                <Grid item xs={12}>
                  Note to Patient
                </Grid>
                <Grid item xs={12} sx={{ border: "1px solid black" }}>
                  <li>Need to care food</li>
                  <li>Drink water Regulary</li>
                  <li>Add leafy vegetables in food </li>
                </Grid>

                <Grid item xs={12}>
                  Note to Patient
                </Grid>
                <Grid item xs={12} sx={{ border: "1px solid black" }}>
                  <li>Need regular 10 checkup</li>
                  <li>phone call follow up needed</li>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

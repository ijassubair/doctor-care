import { Grid } from "@mui/material";
import MuiTable from "../../../components/molecules/table/MuiTable";
import React, { useState, useEffect } from "react";
import { ApiService } from "../../../services/api.services";
import SearchField from "../../../components/molecules/SearchField";
const Home = () => {
  const [data, setData] = useState([]);
  const [tokenData, setTokenData] = useState([]);

  const patientListColumns = [
    { id: "patientId", label: "Patient ID" },
    { id: "name", label: "Name" },
    { id: "lastVisited", label: "Last Visited" },
    { id: "nextVisit", label: "Next Visit" },
  ];

  const tokenListColumns = [
    { id: "tokenNumber", label: "Token Number" },
    { id: "patientId", label: "Patient ID" },
    { id: "patientName", label: "Name" },
  ];

  const todaysPlannedVisits = [
    {
      patientName: "Arun Patient",
      patientId: "12301228-231c-4388-a506-c37775914a86",
      lastVisited: "22/07/2023",
    },
    {
      patientName: "Abhishek",
      patientId: "0ba8281a-8c5b-43e0-936d-c1a72fab8b4b	",
      lastVisited: "01/05/2023",
    },
  ];

  const todaysPlannedVisitColumns = [
    { id: "patientId", label: "Patient ID" },
    { id: "patientName", label: "Name" },
    { id: "lastVisited", label: "Last Visited" },
  ];

  useEffect(() => {
    ApiService.getAllPatients().then((res) => {
      console.log("----------", res.data);
      setData(res.data.data);
    });

    ApiService.getTokensByDate({
      currentDate: "2023-07-29T22:10:38.073Z",
    }).then((res) => {
      console.log("----------", res.data);
      setTokenData(res.data.data);
    });
  }, []);
  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchField placeholder={"Search Patient..."} />
          </Grid>
          <Grid item xs={12}>
            <MuiTable
              tableMaxHeight={"66vh"}
              rowData={data}
              columns={patientListColumns}
            />
            {/* name,patient id, last visited, upcoming visit */}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container style={{ height: "100%" }} spacing={1}>
          <Grid item xs={12}>
            Today's Visitors
          </Grid>
          <Grid item xs={12}>
            <MuiTable
              tableMaxHeight={"36vh"}
              rowData={tokenData}
              columns={tokenListColumns}
            />
          </Grid>
          <Grid item xs={12}>
            Today's Recommeded visitors
          </Grid>
          <Grid item xs={12}>
            <MuiTable
              tableMaxHeight={"21vh"}
              rowData={todaysPlannedVisits}
              columns={todaysPlannedVisitColumns}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;

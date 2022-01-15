import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { MONITORING_LINKS } from "../constants";
import { Grid, TextField, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { sub, getUnixTime } from "date-fns";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import React from "react";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export default function Home() {
  const [dateFrom, setDateFrom] = React.useState<Date | null>(
    sub(new Date(), {
      hours: 6,
    })
  );
  const [dateTo, setDateTo] = React.useState<Date | null>(new Date());

  const [selectedItem, setSelectedItem] = React.useState<{ title: string; url: string }[]>(
    MONITORING_LINKS["Cibo Production"]["CIBO01-P"]
  );
  const [selectedIndex, setSelectedIndex] = React.useState("CIBO01-P");

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          minHeight: "100vh",
          p: 3,
        }}
      >
        <div>
          <Head>
            <title>MENTZ Monitoring</title>
            <meta name="description" content="MENTZ Monitoring" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <span style={{ marginRight: "1em" }}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="From"
                  value={dateFrom}
                  onChange={(newValue) => {
                    setDateFrom(newValue);
                  }}
                />
              </span>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="To"
                value={dateTo}
                onChange={(newValue) => {
                  setDateTo(newValue);
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  overflow: "auto",
                  maxHeight: "80vh",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Production
                  </ListSubheader>
                }
              >
                {Object.keys(MONITORING_LINKS).map((title, index) => {
                  return (
                    <React.Fragment key={index}>
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={title} />
                      </ListItemButton>
                      <Collapse in={true} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {Object.keys(MONITORING_LINKS[title]).map((subTitle) => {
                            return (
                              <ListItemButton
                                selected={selectedIndex === subTitle}
                                sx={{ pl: 4 }}
                                key={subTitle}
                                onClick={() => {
                                  setSelectedItem(MONITORING_LINKS[title][subTitle]);
                                  setSelectedIndex(subTitle);
                                }}
                              >
                                <ListItemIcon>
                                  <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary={subTitle} />
                              </ListItemButton>
                            );
                          })}
                        </List>
                      </Collapse>
                    </React.Fragment>
                  );
                })}
              </List>
            </Grid>
            <Grid item xs={10} style={{ marginTop: "1em" }}>
              <Grid container spacing={3}>
                {selectedItem.map((item, index) => {
                  const url = item.url
                    .replace("{0}", getUnixTime(dateFrom).toString())
                    .replace("{1}", getUnixTime(dateTo).toString());
                  return (
                    <Grid
                      item
                      xs={6}
                      key={item.title}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "0.5em",
                        }}
                      >
                        <strong>{item.title}</strong>
                      </div>
                      <iframe
                        style={{
                          width: "100%",
                          backgroundColor: "#fff",
                          height: "75vh",
                          margin: 0,
                          padding: 0,
                        }}
                        src={url}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    </ThemeProvider>
  );
}

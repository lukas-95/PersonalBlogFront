import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import Home from "../home/Home";

function About() {
  return (
    <>
      <Paper>
        <Box  p={2}>
          <Box display="flex" justifyContent="center">
            <h1>About</h1>
          </Box>
          <img src="https://i.imgur.com/H88yIo2.png" alt="" className="img" />


          <Box >
          <Button variant="contained" color="secondary">Go HOME</Button>
            <Button variant="contained" color="primary">DO ABOUT 02</Button>
          </Box>
        </Box>
      </Paper>
    </>
      );
}

export default About;

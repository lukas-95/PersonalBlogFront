import React from "react";
import "./Home.css";
import { Grid, Paper, Button} from "@material-ui/core";
import { Box } from "@mui/material";


function Home() {
  return (
    <>
      <Paper>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <h1>Home</h1>
          </Box>
          <img src="https://i.imgur.com/H88yIo2.png" alt="" className="img" />

          <Box>
            <Button variant="contained" color="primary">texto 01</Button>
            <Button variant="contained" color="primary">texto 02</Button>
          </Box>
        </Box>
      </Paper>
    </>

    // <>

    //  { <Grid container spacing={2}>
    //     <Grid item xs={12} sm={8}>
    //       <Paper style={{ height: "100vh", background: "lightgrey" }}>
    //         <h1>hello world</h1>
    //         <img src="https://i.imgur.com/H88yIo2.png" width="200" alt="" />
    //       </Paper>
    //     </Grid>
    //     <Grid item container direction="column" xs={12} sm={4}>
    //       <Grid item>
    //         <Paper style={{ height: "49vh", background: "red " }}>
    //           <h1>hello world</h1>
    //         </Paper>
    //       </Grid>
    //       <Grid item>
    //         <Paper style={{ height: "49vh", background: "green " }}>
    //           <h1>hello world</h1>
    //         </Paper>
    //       </Grid>
    //     </Grid>
    //   </Grid> }
    // </>
  );
}

export default Home;

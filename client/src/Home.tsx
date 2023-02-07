import { Map } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export { Home };

function Home() {
  return (
    <Grid
      container
      sx={{ height: "100vh", width: "100vw", backgroundColor: "beige" }}
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      textAlign="center"
    >
      <Grid item>
        <Typography>Welcome to this weather forecasting app !</Typography>
        <Typography sx={{ mt: 5 }}>
          Only two cities are available for now, but feel free to add new ones.
        </Typography>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          color="primary"
          variant="contained"
          to={`/forecast`}
          sx={{ margin: "auto" }}
        >
          <Map />
          Access map
        </Button>
      </Grid>
    </Grid>
  );
}

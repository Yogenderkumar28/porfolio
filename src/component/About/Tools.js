import React from "react";
import {
  SiGithub,
  SiVisualstudiocode,
  SiVercel,
  SiMaterialui,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const Tools = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiGithub color="whitesmoke" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons" color="whitesmoke">
        <SiBootstrap color="whitesmoke" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="whitesmoke" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiMaterialui color="whitesmoke" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiFigma color="whitesmoke" />
      </Grid>
    </Grid>
  );
};

export default Tools;

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
        <SiGithub color="#fca311" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons" color="whitesmoke">
        <SiBootstrap color="#fca311" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="#fca311" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiMaterialui color="#fca311" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <SiFigma color="#fca311" />
      </Grid>
    </Grid>
  );
};

export default Tools;

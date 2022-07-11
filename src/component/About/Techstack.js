import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { Grid } from "@mui/material";

const Techstack = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={4} md={2} className="tech-icons">
        <CgCPlusPlus color="whitesmoke" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons" color="whitesmoke">
        <DiJavascript1 />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiNodejs color="whitesmoke" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiReact color="whitesmoke" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiMongodb color="whitesmoke" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiGit color="whitesmoke" />
      </Grid>
    </Grid>
  );
};

export default Techstack;

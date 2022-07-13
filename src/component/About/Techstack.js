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
        <CgCPlusPlus color="#fca311" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons" color="whitesmoke">
        <DiJavascript1 color="#fca311" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiNodejs color="#fca311" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiReact color="#fca311" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiMongodb color="#fca311" />
      </Grid>
      <Grid item xs={4} md={2} className="tech-icons">
        <DiGit color="#fca311" />
      </Grid>
    </Grid>
  );
};

export default Techstack;

import React from "react";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import aboutImg from "../../assets/about2.svg";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Tools from "./Tools";

const About = () => {
  const HeadingText = styled(Typography)`
    color: white;
    font-size: 3rem;
  `;
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        direction={{ xs: "column", md: "row" }}
        sx={{ pt: "5rem", pb: "1rem" }}
        margin="auto"
      >
        <Grid item xs={6} pl="4rem" pr="4rem">
          <AboutCard />
        </Grid>
        <Grid item xs={4}>
          <img src={aboutImg} alt="Myimage" style={{ maxHeight: "450px" }} />
        </Grid>
      </Grid>
      <Grid
        container
        margin="auto"
        xs={10}
        justifyContent="center"
        pt={5}
        display="flex"
        flexDirection="column"
      >
        <Grid item mt="3rem">
          <HeadingText variant="h3" gutterBottom>
            Professional{" "}
            <span style={{ color: "#fca311", fontWeight: "600" }}>
              Skillset
            </span>
          </HeadingText>
        </Grid>
        <Grid item>
          <Techstack />
        </Grid>
      </Grid>
      <Grid
        container
        margin="auto"
        xs={10}
        justifyContent="center"
        pt={5}
        display="flex"
        flexDirection="column"
      >
        <Grid item>
          <HeadingText variant="h3" gutterBottom>
            Professional{" "}
            <span style={{ color: "#fca311", fontWeight: "600" }}>Tools</span> I
            use
          </HeadingText>
        </Grid>
        <Grid item>
          <Tools />
        </Grid>
      </Grid>
    </>
  );
};

export default About;

import { Typography, Grid } from "@mui/material";
import React from "react";
import Type from "./Type";
import homeMain from "../../assets/home-main.svg";
import styled from "@emotion/styled";
import Home2 from "./Home2";

const Home = () => {
  const Text = styled(Typography)`
    color: white;
    font-size: 3rem;
    padding: 0.5rem;
  `;

  const Strong = styled(Typography)`
    color: #fca311;
    font-size: 3rem;
    font-weight: 600;
  `;

  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        direction={{ xs: "column", md: "row" }}
        sx={{ pt: "5rem", pb: "1rem" }}
        zIndex="1000"
      >
        <Grid item padding="10vh" xs={6}>
          <Text variant="h1">
            Hi There! <span>👋🏻</span>
          </Text>
          <Text variant="h1" flexDirection={"row"}>
            I'm
            <span style={{ color: "#fca311", fontWeight: "600" }}>
              {" "}
              Yogender Kumar
            </span>
          </Text>

          <Strong variant="h1" mt="3rem">
            <Type />
          </Strong>
        </Grid>
        <Grid item xs={4}>
          <img src={homeMain} alt="home pic" style={{ maxHeight: "450px" }} />
        </Grid>
      </Grid>
      <Grid container>
        <Home2 />
      </Grid>
    </>
  );
};

export default Home;

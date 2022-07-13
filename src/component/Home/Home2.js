import styled from "@emotion/styled";
import { Typography, Grid, IconButton } from "@mui/material";
import React from "react";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Box } from "@mui/system";

const Home2 = () => {
  const HeadingText = styled(Typography)`
    color: white;
    font-size: 3rem;
  `;

  const ParaText = styled(Typography)`
    color: white;
    font-size: 1.2rem;
    padding: 10px;
    text-align: justify;
  `;

  const SocialIcon = styled(IconButton)`
    color: white;
    &:hover {
      box-shadow: 1px 2px 3px 4px #fca311;
      transform: all 3s;
    }
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
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="column"
          alignItems="left !important"
          pl="4rem"
          pr="4rem"
        >
          <HeadingText variant="h3" gutterBottom>
            LET ME <span style={{ color: "#fca311" }}>INTRODUCE</span> MYSELF
          </HeadingText>
          <ParaText variant="p">
            I fell in love with programming when I was in class 12. Now I am
            able to play with some technologies.
          </ParaText>
          <br />
          <ParaText variant="p">
            I am fluent in Classics like{" "}
            <span style={{ color: "#fca311", fontStyle: "oblique" }}>
              C++ and Javascript
            </span>
          </ParaText>
          <ParaText variant="p">
            My field of Interest is building new{" "}
            <span style={{ color: "#fca311", fontStyle: "oblique" }}>
              Web Technologies
            </span>{" "}
            using{" "}
            <span style={{ color: "#fca311", fontStyle: "oblique" }}>
              MERN stack.
            </span>
          </ParaText>
          <ParaText variant="p">
            I am a Tecnology Enthusiast love to do creative things and learn new
            updates in Technolgy field.
          </ParaText>
        </Grid>
        <Grid item xs={4}>
          <Tilt>
            <img
              src={myImg}
              alt="Myimage"
              style={{ maxHeight: "450px", margin: "auto" }}
            />
          </Tilt>
        </Grid>
      </Grid>
      <Grid
        container
        xs={8}
        justifyContent="center"
        margin="auto"
        padding="2rem"
      >
        <Grid item>
          <HeadingText variant="h4">FIND ME ON</HeadingText>
          <ParaText variant="body1">
            Feel free to <span style={{ color: "#fca311" }}>Connect</span> with
            me
          </ParaText>
          <Box>
            <SocialIcon href="">
              <AiFillGithub />
            </SocialIcon>
            <SocialIcon href="">
              <AiOutlineTwitter />
            </SocialIcon>
            <SocialIcon href="">
              <AiFillInstagram />
            </SocialIcon>
            <SocialIcon href="">
              <FaLinkedinIn />
            </SocialIcon>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home2;

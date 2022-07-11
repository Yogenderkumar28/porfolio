import React from "react";
import { Typography, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  const HeadingText = styled(Typography)`
    color: white;
    font-size: 3rem;
  `;

  const ParaText = styled(Typography)`
    color: white;
    font-size: 1.2rem;
    padding-bottom: 10px;
    text-align: justify;
  `;

  return (
    <>
      <Grid container xs={12}>
        <HeadingText variant="h3" gutterBottom>
          Know Who <span style={{ color: "#fca311" }}>I'm</span>
        </HeadingText>
        <ParaText variant="p">
          Hi Everyone, I am{" "}
          <span style={{ color: "#fca311" }}>Yogender Kumar</span> from{" "}
          <span style={{ color: "#fca311" }}>New Delhi, India</span>
        </ParaText>
        <ParaText variant="p">
          I am pursuing B.tech in{" "}
          <span style={{ color: "#fca311" }}>Electrical Engineering</span> from{" "}
          <span style={{ color: "#fca311" }}>
            Delhi Technological University
          </span>
        </ParaText>
        <br />
        <ParaText variant="p">Apart from Coding, my hobbies are :-</ParaText>
        <Grid
          container
          display="flex"
          flexDirection="column"
          paddingLeft="2rem"
        >
          <ParaText variant="p">
            <ImPointRight />
            Reading Poetry
          </ParaText>
          <ParaText variant="p">
            <ImPointRight />
            Wriing Poetry
          </ParaText>
          <ParaText variant="p">
            <ImPointRight />
            Playing Games
          </ParaText>
          <ParaText variant="p">
            <ImPointRight />
            Exploring Psychology
          </ParaText>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutCard;

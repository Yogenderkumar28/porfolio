import React from "react";
import styled from "@emotion/styled";
import { Typography, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import Project1 from "../../assets/Project1.png";

const Projects = () => {
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
  return (
    <>
      <Grid
        container
        margin="auto"
        xs={10}
        mt={10}
        justifyContent="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid item>
          <HeadingText variant="h3">
            My Recent<span style={{ color: "#fca311" }}> Works</span>
          </HeadingText>
          <ParaText variant="body1">
            Here are a few Project I've worked on recently
          </ParaText>
        </Grid>
      </Grid>
      <Grid container xs={10} margin="auto" display="flex" flexDirection="row">
        <Grid item className="project-card" md={4}>
          <ProjectCard
            imgPath={Project1}
            title="Community Question Asking Platform"
            description="Developed a community-based platform where anyone can ask question and get best answer. It is basically a knowledge sharing platform."
            ghLink="https://github.com/Yogenderkumar28/engi-Zone"
            demoLink="https://engizone.vercel.app/"
          />
        </Grid>
        <Grid item className="project-card" md={4}>
          <ProjectCard
            imgPath={Project1}
            title="Community Question Asking Platform"
            description="Developed a community-based platform where anyone can ask question and get best answer. It is basically a knowledge sharing platform."
            ghLink="https://github.com/Yogenderkumar28/engi-Zone"
            demoLink="https://engizone.vercel.app/"
          />
        </Grid>
        <Grid item className="project-card" md={4}>
          <ProjectCard
            imgPath={Project1}
            title="Community Question Asking Platform"
            description="Developed a community-based platform where anyone can ask question and get best answer. It is basically a knowledge sharing platform."
            ghLink="https://github.com/Yogenderkumar28/engi-Zone"
            demoLink="https://engizone.vercel.app/"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;

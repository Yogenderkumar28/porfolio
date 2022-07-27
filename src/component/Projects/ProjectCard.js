import React from "react";
import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  const Title = styled(Typography)`
    color: white;
    margin-bottom: 1rem;
  `;

  const ProjectDesc = styled(Typography)`
    color: white;
    text-align: justify;
    margin-bottom: 2rem;
  `;

  const ProjButton = styled(Button)`
    background-color: #8315ea;
  `;
  return (
    <Card variant="outlined" className="project-card-view">
      <Box pl="2rem" pr="2rem" pt="1rem" pb="1rem">
        <CardMedia component="img" image={props.imgPath} alt="card-img" />
      </Box>
      <CardContent>
        <Title variant="h5">{props.title}</Title>
        <ProjectDesc variant="body1">{props.description}</ProjectDesc>
        <ProjButton variant="contained" href={props.ghLink} target="_blank">
          <BsGithub />
          &nbsp;{"Github"}
        </ProjButton>
        {"\n"}
        {"\n"}
        <Button
          variant="contained"
          href={props.demoLink}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <CgWebsite /> &nbsp;Demo
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

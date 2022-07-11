import React from "react";
import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
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
  return (
    <Card variant="outlined" className="project-card-view" margin="1rem">
      <CardMedia
        component="img"
        image={props.imgPath}
        alt="card-img"
        style={{ padding: "1rem" }}
      />
      <CardContent>
        <Title variant="h5">{props.title}</Title>
        <ProjectDesc variant="body1" gutter>
          {props.description}
        </ProjectDesc>
        <Button variant="contained" href={props.ghLink} target="_blank">
          <BsGithub />
          &nbsp;{"Github"}
        </Button>
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

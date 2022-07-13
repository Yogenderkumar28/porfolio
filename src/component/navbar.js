import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { Grid, Typography } from "@mui/material";

const Navbar = () => {
  const [expand, updateExpanded] = useState(false);
  const [position, updatePosition] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updatePosition(true);
    } else {
      updatePosition(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const UserButton = styled(Button)`
    text-transform: none;
    color: white;
    padding: 6px 12px !important;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: #fca311;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover {
      color: #fca311;

      &::before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  `;

  const NavBar = styled(AppBar)`
    background-color: #020614;
  `;

  const Text = styled(Typography)`
    font-size: 18px;
    font-weight: 500;
  `;

  return (
    <NavBar position="sticky" aria-expanded={expand} fixed="top" expand="md">
      <Container maxWidth="xl" sx={{ marginTop: "5px" }}>
        <Toolbar>
          <Box>
            <img
              src={logo}
              alt="logo"
              style={{ width: "60px", marginLeft: "2vw" }}
            />
          </Box>
          <Grid container justifyContent="flex-end">
            <Box item mr="0.5rem">
              <UserButton href="/" variant="text" startIcon={<AiOutlineHome />}>
                <Text>Home</Text>
              </UserButton>
            </Box>
            <Box item mr="0.5rem">
              <UserButton
                href="/about"
                variant="text"
                startIcon={<AiOutlineUser />}
              >
                <Text>About</Text>
              </UserButton>
            </Box>
            <Box item mr="0.5rem">
              <UserButton
                href="/education"
                variant="text"
                startIcon={<FaUniversity />}
              >
                <Text>Education</Text>
              </UserButton>
            </Box>
            <Box item mr="0.5rem">
              <UserButton
                href="/projects"
                variant="text"
                startIcon={<AiOutlineFundProjectionScreen />}
              >
                <Text>Projects</Text>
              </UserButton>
            </Box>
            <Box item mr="0.5rem">
              <UserButton
                href="/Resume"
                variant="text"
                startIcon={<CgFileDocument />}
              >
                <Text>Resume</Text>
              </UserButton>
            </Box>
          </Grid>
        </Toolbar>
      </Container>
    </NavBar>
  );
};
export default Navbar;

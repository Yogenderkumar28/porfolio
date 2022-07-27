import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import Hamburger from "hamburger-react";
import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import {
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { style } from "@mui/system";

const Navbar = () => {
  const pages = [
    {
      icon: <AiOutlineHome />,
      text: "Home",
    },
    {
      icon: <AiOutlineUser />,
      text: "About",
    },
    {
      icon: <FaUniversity />,
      text: "Education",
    },
    {
      icon: <AiOutlineFundProjectionScreen />,
      text: "Projects",
    },
    {
      icon: <CgFileDocument />,
      text: "Resume",
    },
  ];
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleNavigationAction = (page) => {
    switch (page.text) {
      case "Home":
        navigate("/");
        break;

      case "About":
        navigate("/about");
        break;
      case "Education":
        navigate("/education");
        break;
      case "Projects":
        navigate("/projects");
        break;
      case "Resume":
        navigate("/resume");
        break;
      default:
        break;
    }
  };

  const UserButton = styled(Button)`
    text-transform: none;
    color: white;
    padding: 6px 10px !important;
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
    margin: 2px;
  `;

  const MenuItemDiv = styled(MenuItem)`
    background-color: #fca311;
    border-radius: 1rem;
  `;

  return (
    <NavBar position="sticky" width={100}>
      {/* <Container maxWidth="xl" sx={{ marginTop: "5px" }}> */}
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5rem",
        }}
      >
        <Box>
          <Link component={RouterLink} sx={{ textDecoration: "none" }} to="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "60px", marginLeft: "2vw" }}
            />
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <UserButton
              key={page.text}
              onClick={() => {
                handleNavigationAction(page);
              }}
              sx={{
                color: "inherit",
                display: "flex",
              }}
              variant="text"
              startIcon={page.icon}
            >
              <Text ml={0.2}>{page.text}</Text>
            </UserButton>
          ))}
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none", color: "#fca311" } }}>
          <IconButton
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            {/* <Hamburger
              toggled={isOpenMenu}
              rounded
              onToggle={setOpenMenu(!isOpenMenu)}
            /> */}
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vartical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "flex", md: "none" },
              mt: "70px",
              ml: "0px",
            }}
          >
            {pages.map((page) => (
              <UserButton>
                <MenuItemDiv
                  key={page.text}
                  onClick={() => {
                    handleNavigationAction(page);
                    handleCloseNavMenu();
                  }}
                  sx={{
                    width: "93vw",
                  }}
                  // backgrounColor="#020614"
                >
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <Text>{page.text}</Text>
                </MenuItemDiv>
              </UserButton>
            ))}
          </Menu>
        </Box>
        {/* <Box>
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
          </Grid> */}
      </Toolbar>
      {/* </Container> */}
    </NavBar>
  );
};
export default Navbar;

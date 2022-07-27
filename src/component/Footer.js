import React from "react";
import { Typography, Grid, IconButton } from "@mui/material";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styled from "@emotion/styled";

const Footer = () => {
  const FooterText = styled(Typography)`
    color: white;
    font-size: 1.2rem;
    padding: 10px;
  `;

  const SocialIcon = styled(IconButton)`
    color: white;
    &:hover {
      box-shadow: 1px 2px 3px 4px #fca311;
      transform: all 3s;
    }
  `;
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Grid
      container
      direction={{ xs: "column", md: "column" }}
      sx={{ pt: "1rem", pb: "1rem" }}
      bgcolor="#020614"
      justifyContent="space-evenly"
      position="relative"
      bottom="0"
    >
      <Grid item>
        <FooterText variant="h5">
          Designed & Developed by Yogender Kumar
        </FooterText>
      </Grid>
      <Grid item>
        <FooterText variant="h5">Copyright © {year} Yk</FooterText>
      </Grid>
      <Grid item>
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
      </Grid>
    </Grid>
  );
};

export default Footer;

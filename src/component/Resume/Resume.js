import React, { useEffect, useState } from "react";
import pdf from "../../assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import styled from "@emotion/styled";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Grid, Typography, Button } from "@mui/material";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const HeadingText = styled(Typography)`
    color: white;
    font-size: 3rem;
  `;

  return (
    <>
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mt={5}
      >
        <Grid item>
          <HeadingText variant="h3" gutterBottom>
            Resume
          </HeadingText>
        </Grid>

        <Grid item mb="2rem">
          <Button
            variant="contained"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Grid>

        <Grid item margin="auto">
          <Document file={pdf} className>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Grid>
        <Grid item mt="2rem" mb="2rem">
          <Button
            variant="contained"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool, MdStar } from "react-icons/md";
import { Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Education = () => {
  const HeadingText = styled(Typography)`
    color: white;
    font-size: 3rem;
  `;
  return (
    <>
      <Grid container justifyContent="center" flexDirection="column" mt={10}>
        <Grid item>
          <HeadingText variant="h3" gutterBottom>
            <span style={{ color: "#fca311", fontWeight: "600" }}>
              Experience
            </span>
          </HeadingText>
        </Grid>
        <Grid item>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#00547E", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #00547E",
              }}
              date="May 2022 - July 2022"
              iconStyle={{ background: "#00547E", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                <span style={{ color: "#fca311", fontWeight: "600" }}>
                  Echiofy Private Limited
                </span>
              </h4>
              <p>
                Developed a full-fledged website for the company using latest
                technologies. Improved user experience by including animation
                using CSS
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<MdStar />}
            />
          </VerticalTimeline>
          <Grid item mt={15}>
            <HeadingText variant="h3" gutterBottom>
              Educational
              <span style={{ color: "#fca311", fontWeight: "600" }}>
                {" "}
                Qualifications
              </span>
            </HeadingText>
          </Grid>
          <Grid item>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: "#e91e63", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #e91e63",
                }}
                date="November 2012"
                iconStyle={{ background: "#e91e63", color: "#fff" }}
                icon={<MdSchool />}
                position="right"
              >
                <h3 className="vertical-timeline-element-title">
                  Agile Development Scrum Master
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Certification
                </h4>
                <p>Creative Direction, User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: "#e91e63", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #e91e63",
                }}
                date={22}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<MdSchool />}
                position="left"
              >
                <h3 className="vertical-timeline-element-title">
                  Bachelor of Science in Interactive Digital Media Visual
                  Imaging
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bachelor Degree
                </h4>
                <p>Creative Direction, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<MdStar />}
              />
            </VerticalTimeline>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Education;

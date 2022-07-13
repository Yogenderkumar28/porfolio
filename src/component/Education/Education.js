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
          <Grid item mb="2rem">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: "#00547E", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid #00547E",
                }}
                date="Aug 2019 - Present"
                iconStyle={{ background: "#00547E", color: "#fff" }}
                icon={<MdSchool />}
                position="right"
              >
                <h3 className="vertical-timeline-element-title">
                  Bachelor Of Technology
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <span style={{ color: "#fca311", fontWeight: "600" }}>
                    {" "}
                    Delhi Technological University, New Delhi
                  </span>
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  Branch : Electrical Engineering
                </h5>
                <p>CGPA - 8.75 </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: "#00547E", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #00547E",
                }}
                date="2018 - 2019"
                iconStyle={{ background: "#00547E", color: "#fff" }}
                icon={<MdSchool />}
                position="left"
              >
                <h3 className="vertical-timeline-element-title">
                  12th Standard
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <span style={{ color: "#fca311", fontWeight: "600" }}>
                    {" "}
                    Kendriya Vidyalaya Sainik Vihar, New Delhi
                  </span>
                </h4>
                <p>Percentage - 92.6%</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: "#00547E", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #00547E",
                }}
                date="2016 - 2017"
                iconStyle={{ background: "#00547E", color: "#fff" }}
                icon={<MdSchool />}
                position="right"
              >
                <h3 className="vertical-timeline-element-title">
                  10th Standard
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <span style={{ color: "#fca311", fontWeight: "600" }}>
                    {" "}
                    Kendriya Vidyalaya Sainik Vihar, New Delhi
                  </span>
                </h4>
                <p>CGPA - 10</p>
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

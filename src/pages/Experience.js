import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { School, Work } from "@mui/icons-material";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css"

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#b721ff">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January 2023 - Present"
                    iconStyle={{ background: "#f77062", color: "#fff" }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Full Stack Software Engineer Intern - eMoney Advisor
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        San Antonio, TX
                    </h4>
                    <p>
                        Released multiple features for over 100k financial professionals.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January 2022 - June 2023"
                    iconStyle={{ background: "#f77062", color: "#fff" }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Full Stack Software Engineer Intern - Travelers
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        San Antonio, TX
                    </h4>
                    <p>Developed the backend infrastructure for 3 projects.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="August 2020 - May 2024"
                    iconStyle={{ background: "#4837ff", color: "#fff" }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Northeastern University
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Boston, MA
                    </h4>
                    <p> Bachelor of Science in Computer Science</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
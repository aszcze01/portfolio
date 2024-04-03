import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { WorkIcon } from "../components/old/Icons";
// import reactIcon from "../assets/react.svg";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Tilt } from "@jdion/tilt-react";
import WGlobe from "../models/WGlobe";
import MonitorFlat from "../models/MonitorFlat";
import MonitorCRT from "../models/MonitorCRT";
import Camera from "../models/Camera";
import IMac from "../models/IMac";
import Palette from "../models/Palette";

const Bio = () => {

    const iconStyle = { background: "black", color: "black" }
    const contentArrowStyle = { display: "none" }
    const contentStyle = {
        background: "none",
        color: "rgb(0, 255, 84)",
        border: "none",
        marginTop: 0,
      }

  return (
    <>
      {/* <Scrollbars style={{ width: '100%', height: '1000px' }}> */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            date="may 2019 – dec 2023"
            icon={<MonitorFlat />}
          >
            <Tilt>
              <div className="bio__content">
                <h3 className="vertical-timeline-element-title">
                  Frontend Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Isobar</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </div>
            </Tilt>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            date="jul 2014 – apr 2019"
            icon={<MonitorFlat />}
          >
            <Tilt>
              <div className="bio__content">
                <h3 className="vertical-timeline-element-title">
                  Frontend Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Hypermedia</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </div>
            </Tilt>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            date="aug 2008 – jul 2014"
            icon={<MonitorFlat />}
          >
            <Tilt>
              <div className="bio__content">
                <h3 className="vertical-timeline-element-title">
                  Freelancer
                </h3>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </div>
            </Tilt>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            date="dec 2006 – aug 2008"
            icon={<MonitorCRT />}
          >
            <Tilt>
              <div className="bio__content">
                <h3 className="vertical-timeline-element-title">
                  Graphic Designer<br/>
                  DTP Operator
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Eprint</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </div>
            </Tilt>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            date="jun 2006 – sep 2006"
            icon={<MonitorCRT />}
          >
            <Tilt>
              <div className="bio__content">
                <h3 className="vertical-timeline-element-title">
                  Graphic Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Grafservice</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </div>
            </Tilt>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            date="mar 2005 – jun 2006"
            icon={<IMac />}
          >
            <Tilt>
              <div className="bio__content">
                <h3 className="vertical-timeline-element-title">
                  Graphic Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Eniro</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </div>
            </Tilt>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            date="gru 2003 – lut 2005"
            icon={<MonitorCRT />}
          >
            <Tilt>
              <div className="bio__content">
                <h3 className="vertical-timeline-element-title">
                  Graphic Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Freelancer</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </div>
            </Tilt>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            date="1999 – 2003"
            icon={<Camera />}
          >
            <Tilt>
              <div className="bio__content">
                <h3 className="vertical-timeline-element-title">
                  Photographer <br />
                  Journalist
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Polska Press</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </div>
            </Tilt>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work edu"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            iconStyle={iconStyle}
            date="1995 – 2000"
            icon={<Palette />}
          >
            <Tilt>
              <div className="bio__content">
                <h3 className="vertical-timeline-element-title">
                  Academy <br />
                  of Fine Arts
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Lodz, Poland</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </div>
            </Tilt>
          </VerticalTimelineElement>

        </VerticalTimeline>
      {/* </Scrollbars> */}
    </>
  );
};

export default Bio;

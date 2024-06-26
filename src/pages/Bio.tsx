import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Tilt } from "@jdion/tilt-react";
import MonitorFlat from "../models/MonitorFlat";
import MonitorCRT from "../models/MonitorCRT";
import Camera from "../models/Camera";
import IMac from "../models/IMac";
import Palette from "../models/Palette";
import { useSnapshot } from "valtio";
import state from "../store";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Bio = () => {
  const snap = useSnapshot(state);

  const iconStyle = { background: "black", color: "black" };
  const contentArrowStyle = { display: "none" };
  const contentStyle = {
    background: "none",
    color: "rgb(0, 255, 84)",
    border: "none",
    marginTop: 0,
  };

  useEffect(() => {
    state.isBioPage = true;
    state.isInfoPage = false;
    state.isContactPage = false;
    snap.isBioPage &&
      console.log("BIO!");
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Andrzej Szczepanik | Bio</title>
      </Helmet>
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
                Developing new and maintainig existing web applications using frontend technologies <br/>
                HTML, CSS (Sass, Tailwind), Javascript, Typescript, React
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
                Developing new and maintainig existing web applications using frontend technologies <br/>
                HTML, CSS (Sass), Javascript, JQuery, React.
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
              <h3 className="vertical-timeline-element-title">Freelancer</h3>
              <p>
                Graphics Design, Desktop Publishing, Web Design.<br/>
                Photoshop, Illustrator, Indesign, Adobe Acrobat, Flash, Blender.
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
                Graphic Designer
                <br />
                DTP Operator
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Eprint</h4>
              <p>
                Graphics Design, Desktop Publishing, Prepress, Web Design, Logo Design.<br/>
                Photoshop, Illustrator, Indesign, Acrobat, Blender.
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
              <h4 className="vertical-timeline-element-subtitle">
                Grafservice
              </h4>
              <p>
                Graphics and Logo Design.<br/>
                Photoshop, CorelDraw.
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
                Graphics design of the Yellow Pages advertisings.<br/>
                Photoshop, Illustrator, QuarkXPress.
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
                Graphics design.<br/>
                Photoshop, CorelDraw.
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
              <h4 className="vertical-timeline-element-subtitle">
                Polska Press
              </h4>
              <p>
                Making photos and writing articles in the local newspaper.
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
              <h4 className="vertical-timeline-element-subtitle">
                Lodz, Poland
              </h4>
              <p> 
                Master of Fine Arts degree, Faculty of Textiles and Clothing.
              </p>
            </div>
          </Tilt>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </HelmetProvider>
  );
};

export default Bio;

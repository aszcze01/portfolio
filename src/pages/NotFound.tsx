import { Link } from "react-router-dom";
import Ufo from "../models/Ufo";
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';

/**
 * Renders the NotFound component.
 *
 * @return {JSX.Element} The JSX for the NotFound component
 */

const NotFound = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Andrzej Szczepanik | 404</title>
      </Helmet>
      <div className="notFound">
        <div className="notFound__ufo">
          <Ufo />
        </div>
        <h2>No signs of intelligent life here.</h2>
        <div>However, there is a chance to find it here:</div>
        <ul>
          <li>
            <Link to="/">HOME BASE</Link>
          </li>
          <li>
            <Link to="/info">INFO</Link>
          </li>
          <li>
            <Link to="/bio">BIO</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </HelmetProvider>
  );
};

export default NotFound;

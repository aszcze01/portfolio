import { Link } from "react-router-dom";
import Ufo from "../models/Ufo";

/**
 * Renders the NotFound component.
 *
 * @return {JSX.Element} The JSX for the NotFound component
 */

const NotFound = () => {
  return (
    <>
        <div className="notFound">
            <div className="notFound__ufo">
                <Ufo />
            </div>
            <h2>No signs of itelligent life here.</h2>
            <div>However there is a chance to find one here:</div>
            <ul>
                <li><Link to="/">HOME BASE</Link></li>   
                <li><Link to="/info">INFO</Link></li>
                <li><Link to="/bio">BIO</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </div>
    </>
  )
}

export default NotFound
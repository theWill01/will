import React, { useState} from "react";
import { NavLink, Link } from "react-router-dom";
import "../assets/styles/Nav.scss";
import DP from "../assets/images/will.jpg";
/*import { useClickOutside } from "../hooks/UseClickOutside"; */
import Twitter from "../assets/images/icons8-twitter-circled-100.png";
import LinkedIn from "../assets/images/icons8-linkedin-circled-128.png";
import GitHub from "../assets/images/icons8-github-100.png";
import Contact from "../assets/images/contact.png";
import Home from "../assets/images/home.png";
import Project from "../assets/images/project.png";
export default function Nav() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
 
  function move(e, value) {
    e.preventDefault();
    window.location.replace(value);
  }
  


  /*const domNode = useClickOutside(() => {

      setIsOpen(false);
    });
  */
  

  

  return (
    <nav className="navbar w-full flex h-16 border-2 overflow-hidden md:w-full lg:w-full">
      {/*MOBILE NAVIGATION TOGGLE */}
      <Link to="#" className="menu" onClick={() => toggle()}>
        <div className={!isOpen ? "bar1" : "bar4"}></div>
        <div className={!isOpen ? "bar2" : "bar5"}></div>
        <div className={!isOpen ? "bar3" : "bar6"}></div>
      </Link>
      {/* LOGO/NAME */}
      <Link to="#" className="logo">
        <h3>WILL ALBERT</h3>
      </Link>

      {/*MOBILE NAVIGATION */}
      <div className={!isOpen ? "open " : "close"}>
        {/* */}
        <div className="navLinks ">
          <NavLink to="#" className="nav" onClick={(e) => move(e, "/#home")}>
            <h5>Home</h5>
            <img src={Home} alt="i" />
          </NavLink>

          <NavLink to="#" className="nav" onClick={(e) => move(e, "/#pro")}>
            <h5>Projects</h5>
            <img src={Project} alt="i" />
          </NavLink>

          <NavLink
            to="#"
            className="nav "
            onClick={(e) => move(e, "/#contact")}
          >
            <h5> Contact</h5>
            <img src={Contact} alt="i" />
          </NavLink>

          {/* SOCIALS/CONTACT ICONS */}
          <div className="socials">
            <Link to="#" className="socials-icon">
              <img src={Twitter} alt="twitter" className="socialsIcon" />
            </Link>
            <Link to="#" className="socials-icon">
              <img src={LinkedIn} alt="linkedin" className="socialsIcon" />
            </Link>
            <Link to="#" className="socials-icon">
              <img src={GitHub} alt="github" className="socialsIcon" />
            </Link>
          </div>
        </div>
      </div>

      {/* DISPLAY PICTURE */}
      <span className="dp"> <img src={DP} alt="#" id="dp" /> </span>
    </nav>
  );
}

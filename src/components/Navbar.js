import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import resume from "../images/rudrika-raghav-drive-resume.pdf"; // Import the resume file

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const downloadFile = () => {
    const aTag = document.createElement('a');
    aTag.href = resume; // Use the imported file URL
    aTag.setAttribute('download', 'rudrika-raghav-drive-resume.pdf');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <nav className="header">
      <div className="logo">
      <Link 
  activeClass="active"
  to="home"
  spy={true}
  smooth={true}
  duration={30}
>
  <div className="logo-img">
    
    <span style={{ fontSize: '30px' }}>Rudrika :)</span>
    
  </div>
</Link>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"} onClick={handleClick}>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            duration={30}
            offset={-60}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={30}
            offset={-60}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={30}
            offset={-60}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={30}
            offset={-60}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="buttons-arrange">
        <button
          onClick={downloadFile} // Call the download function
          className="btn"
        >
          Download Resume
        </button>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes className="bars" size={25} />
        ) : (
          <FaBars className="bars" size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}

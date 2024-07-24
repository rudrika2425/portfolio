import React, { useEffect } from "react";
import "./AboutMeStyle.css";
import profile_black from "../images/profile_black.png";
import profile from "../images/profile_image.png";

export default function AboutMe({ id }) {
  useEffect(() => {
    
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };


    const handleNavClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      targetElement.classList.add("padded");

      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      setTimeout(() => {
        targetElement.classList.remove("padded");
      }, 1000);
    };

   
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    
    const handleScroll = () => {
      document.querySelectorAll("section").forEach((section) => {
        if (isInViewport(section)) {
          section.classList.add("padded");
        } else {
          section.classList.remove("padded");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>About Me</h3>
        Hello, I'm <span>Rudrika Raghav</span>, currently pursuing my B.Tech in Computer Science at GLA University, Mathura. I am a dedicated and driven third-year student with a profound interest in technology and a relentless pursuit of excellence in the field. My journey in Computer Science has equipped me with a robust foundation in programming languages like C , Java , and Python . I thrive on challenges and have a proven track record of swiftly adapting to new technologies and methodologies, coupled with strong problem-solving skills. Beyond front-end development, I am actively exploring backend technologies  to broaden my skill set.
        <br />
        <br />
        <div className="tab-contents">
          <ul>
            <li>
              <span>Bachelor of Technology in Computer Science</span> (2022-2026)
              <br />
              GLA University, Mathura - 8.70 CPI
              <br />
            </li>
            
            <li>
              <span>Intermediate</span> (2021) 
              <br />
              Jaypee Vidya Mandir, Bulandshahr - 94.4%
              <br />
              
            </li>
          
            <li>
              <span>High School</span> (2019)
              <br />
              Seth Anandram Jaipuria School, Ghaziabad - 95%
              <br />
              <br />
             
            </li>
          </ul>
        </div>

        Curious to learn more about my journey? Feel free to explore my {" "}
        <a
          className="resume"
          href="https://drive.google.com/file/d/1dKwdA9ZFZEpZTpehbh98zK-f2MLIbCkF/view"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundImage: "linear-gradient(to right, #DF8908, #B415FF, #F94892)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          explore my resume.
        </a>
      </div>

      <div className="profile-photo">
        <img className="img" src={profile} alt="Profile"></img>

      </div>
      {/* <div className="name">Rudrika</div> */}
    </div>
  );
}

import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'



function App() {
  return (
    <>

    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle={
          <div style={{
            background: 'linear-gradient(to right, #DF8908, #B415FF, #F94892)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent'
          }}>
            Portfolio
          </div>
        }
        projectDesc="Welcome to my portfolio showcasing a collection of dynamic web projects crafted with precision using HTML, CSS, and JavaScript, powered by React.js. Explore how I blend creativity with technical expertise to deliver engaging and responsive web solutions."
        projectLink="https://github.com/DevanshSahni/Wiggles"
        deployedProjectLink="https://wiggles.vercel.app"
        projectImg={require('./images/portfolio.png')}
      />

      {/* <ProjectCard
        projectTitle="Animated Card: featuring the latest glassmorphism trend"
        projectDesc="React JS provided me the flexibility needed to create an interactive card with a glass-like effect, which adds a sense of depth and dimension to the user interface"
        projectLink="https://github.com/Deepajha14/Touch-me-not-Card"
        deployedProjectLink="https://deepajha14.github.io/Touch-me-not-Card/"
        projectImg={require('./images/projectGlassmorphism.png')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="Rog-free: accessible anytime, anywhere"
        projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
        projectLink="https://github.com/Deepajha14/Rog-Free"
        deployedProjectLink="https://deepajha14.github.io/Rog-Free/"
        projectImg={require('./images/projectRogfree.png')}
      /> */}
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;

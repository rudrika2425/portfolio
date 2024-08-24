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
        projectDesc="Welcome to my portfolio, where I showcase a range of dynamic web projects crafted with precision using HTML, CSS, and JavaScript, and powered by React.js. Explore how I blend creativity with technical expertise to deliver engaging and responsive web solutions. From implementing custom animations and routing to integrating Google Sheets and advanced form functionalities, discover how my projects stand out through innovative design and seamless user experiences."
        projectLink="https://github.com/DevanshSahni/Wiggles"
        
        projectImg={require('./images/portfolio.png')}
      />
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
            Stylish Cart - Ecommerce Website
          </div>
        }
        projectDesc="Stylish Cart is a dynamic e-commerce platform built with the MERN stack, providing a seamless shopping experience. The website features robust functionalities for managing a shopping cart, including the ability to add and remove products with real-time updates to the total sum. Users can easily navigate through the site with a well-implemented routing system and access personalized features through a secure login and signup page. The backend, developed using Node.js and Express, ensures efficient data management and smooth integration with MongoDB, while React handles the frontend interactions, delivering a responsive and engaging user experience."
        projectLink="https://github.com/DevanshSahni/Wiggles"
        
        projectImg={require('./images/shopping.png')}
      />
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
            Stylish Cart - Admin Pannel
          </div>
        }
        projectDesc="Stylish Cart is a dynamic e-commerce platform built with the MERN stack, designed to deliver a seamless shopping experience. A key component of the project is the admin panel, which allows for efficient product management through a user-friendly interface. This panel supports the upload of new products and the deletion of existing ones, facilitated by smooth API integrations and effective data management through Node.js and Express. React powers the frontend, ensuring a responsive and engaging user experience, while a well-implemented routing system and secure login/signup page enhance overall site navigation and security."
        projectLink="https://github.com/DevanshSahni/Wiggles"
        
        projectImg={require('./images/admin.png')}
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

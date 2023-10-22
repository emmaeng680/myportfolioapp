import React from 'react'
import "./About.css"
import ME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Learning </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            A Mathematics major and Computer Science minor at the New York University, Abu Dhabi campus.
            I am a frontend engineer with a passion for learning new technologies. 
            As my portfolio projects show, I am no stranger to the backend too.
            I am currently looking for opportunities to work in frontend development.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About


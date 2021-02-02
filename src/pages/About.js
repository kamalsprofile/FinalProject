import React from "react";

import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";

function About() {

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Us" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={require("../assests/react.png")}
                  alt="about"
                />
                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  We are <span className="color-theme">Name of Company</span>
                </h3>
                <p>
                  Hello, I am Ahmad Kamal an engineer and a self-taugh front-end web
                  developer. 
                  <br/>
                  I enjoy building the first impressions of your
                  websites that are intuitive, elegant and provide user interfaces that
                  are responsive. 
                  <br/>
                  I am a quick learner, dependable and a problem solver.
                </p>
                <ul>
                  
                    <li>
                      <b>Full Name</b> 
                    </li>
                    <li>
                      <b>Age</b>  Years
                    </li>
                    <li>
                      <b>Phone</b> 
                    </li>
                    <li>
                      <b>Nationality</b> 
                    </li>
                    <li>
                      <b>Languages</b> 
                    </li>
                    <li>
                      <b>Email</b> 
                    </li>
                    <li>
                      <b>Address</b> 
                    </li>
                    <li>
                      <b>Freelance</b> 
                    </li>
                </ul>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"/#"}
                  className="mi-button"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      
    </Layout>
  );
}

export default About;
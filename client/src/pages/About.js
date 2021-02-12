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
                  src={require("../assests/Doable.png")}
                  alt="about"
                />
                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  We are <span className="color-theme">Doable</span>
                </h3>
                <p>
                Our mission is to help businesses build the future and further grow into
                 outstanding companies, using cutting-edge technologies and best practices in software development.
                  <br/>
                  We are a mix of tech enthusiasts, software experts, product visionaries, and design magicians, bound together by a shared passion for developing innovative software products.

Each project is unique and we are committed to find the ideal solutions to accomplish our partners' goals.
                  <br/>
                </p>
                <ul>
                  
                    <li>
                      <b>Phone : 123456</b> 
                    </li>
                    <li>
                      <b>Email : info@doable.dk</b> 
                    </li>
                    <li>
                      <b>Address : Copenhagen</b> 
                    </li>
                    <li>
                      <b>Number of Employees : 4</b> 
                    </li>
                </ul>
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
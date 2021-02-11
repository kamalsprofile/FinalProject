import React, {  useEffect } from "react";
import Particles from "react-particles-js";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";
import {useHistory} from 'react-router-dom'
import "../assests/header.css"
import 'aos/dist/aos.css';
import AOS from "aos"

function Home(){
  const history = useHistory()
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  };
  
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={paramConfig} />
        <div className="container">
          <div className="row"> 
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I am <span className="color-theme">Ahmad Kamal</span>
                </h1>
                <p>Web and mobile app developer</p>
                <Socialicons bordered />
              </div>
              <div style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
                <button className="serve_btn" onClick={() => history.push("/services")}>View Our Services</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="web_section" data-aos="fade-in" style={{background: 'transparent'}} >
          <img alt="img" src={require("../assests/102.jpg")} width="50%"  />
          <div className="inner_section">
            <h2>Web Development</h2>
            <p className="desc">The software development services that our company provides cover the entire product life-cycle.</p>
            <ul className="list">
              <li className="item">Software architecture and design </li>
              <li className="item">Implementation  </li>
              <li className="item">Testing and quality assurance </li>
              <li className="item">Technical documentation & user documentation </li>
              <li className="item">Support </li>
              <li className="item">Technical documentation & user documentation </li>
              <li className="item">Support </li>
            </ul>
          </div>
      </div>
      <div data-aos="fade-in" className="web_section" style={{background:'transparent', margin: '100px 0px'}} >
          <div className="inner_section">
            <h2>Graphics Design</h2>
            <p className="desc">The software development services that our company provides cover the entire product life-cycle.</p>
            <ul className="list">
              <li className="item">Software architecture and design </li>
              <li className="item">Implementation  </li>
              <li className="item">Testing and quality assurance </li>
              <li className="item">Technical documentation & user documentation </li>
              <li className="item">Support </li>
            </ul>
          </div>
          <img alt="img" src={require("../assests/101.jpg")} width="50%" />
        </div>
    </Layout>
  );
}

export default Home;

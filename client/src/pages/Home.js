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
                Welcome to <span className="color-theme">Doable</span>
                </h1>
                <p>software development company founded in 2020</p>
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
          <img alt="img" src={require("../assests/101.jpg")} width="50%" style={{borderRadius:"15px", opacity:".7", height:"80%"}}   />
          <div className="inner_section">
            <h2>WE OFFER PEACE OF MIND</h2>
            <p className="desc">Doable is a full-stack software development company. We design and build software products for desktop, web, mobile, and connected devices.
              We value excellence in execution and deliver complex software solutions to businesses all around the world.</p>

          </div>
      </div>
      <div data-aos="fade-in" className="web_section" style={{background:'transparent', margin: '100px 0px'}} >
          <div className="inner_section">
            <h2>WE SOLVE PROBLEMS</h2>
            <p className="desc">We push boundaries with creative and mind-bending solutions, 
            while answering the most demanding requirements with precision and deep thought.</p>
          </div>
          <img alt="img" src={require("../assests/other.jpg")} width="50%" style={{borderRadius:"15px", opacity:".7", height:"80%"}}/>
        </div>
        
    </Layout>
  );
}

export default Home;

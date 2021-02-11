import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom'
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Card from "../components/Card";
import * as Icon from 'react-feather'
import "../assests/header.css"
import 'aos/dist/aos.css';
import AOS from "aos"
function Services() {
  const history = useHistory()
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container" style={{minHeight: '100vh'}}>
          <Sectiontitle title="Our Services" />
          <div className="row">
            <div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', cursor:'pointer'}}> 
              <Card image={require("../assests/lock.png")} text="Web Development" onClick={() => history.push("/web")}>
                <Icon.CameraOff className="icons"  size="150"/>
              </Card>
            </div>
            <div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', cursor:'pointer'}}>
            <Card image={require("../assests/react.png")} text="Digital Marketing" onClick={() => history.push("/digital-marketing")}>
                <Icon.Calendar className="icons"  size="150"/>
            </Card>
            </div>
            <div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', cursor:'pointer'}}>
            <Card image={require("../assests/react.png")} text="Graphics Design" onClick={() => history.push("/graphics-design")}>
                <Icon.Calendar className="icons"  size="150"/>
            </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', cursor:'pointer'}}>
              <Card image={require("../assests/react.png")} text="Programming">
                <Icon.Bell className="icons"  size="150"/>
            </Card>
            </div>
            <div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', cursor:'pointer'}}>
            <Card image={require("../assests/react.png")} text="Chat Support">
                <Icon.Tablet className="icons"  size="150"/>
            </Card>
            </div>
            <div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', cursor:'pointer'}}>
            <Card image={require("../assests/react.png")} text="Graphics Design">
                <Icon.Tablet className="icons"   size="150"/>
            </Card>
            </div>
          </div>
        </div>

        <div data-aos="fade-in" className="web_section" style={{background: 'transparent'}} >
          <img alt="img" src={require("../assests/react.png")} />
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
        <div data-aos="fade-in" className="web_section" style={{background:'transparent', margin: '200px 0px'}} >
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
          <img alt="img" src={require("../assests/react.png")} />
        </div>
      </div>
      <br />
    </Layout>
  );
}

export default Services;
import React from "react";

import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Card from "../components/Card";
import * as Icon from 'react-feather'
function Services() {

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container" style={{minHeight: '100vh'}}>
          <Sectiontitle title="Our Services" />
          <div className="row">
            <div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                
              <Card image={require("../assests/lock.png")} text="Web Development">
            <Icon.CameraOff  size="150"/>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card image={require("../assests/react.png")} text="Digital Marketing">
                <Icon.Calendar  size="150"/>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card image={require("../assests/react.png")} text="Logo Design">
                <Icon.Calendar  size="150"/>
            </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Card image={require("../assests/react.png")} text="Programming">
                <Icon.Bell  size="150"/>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card image={require("../assests/react.png")} text="Chat Support">
                <Icon.Tablet  size="150"/>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card image={require("../assests/react.png")} text="Graphics Design">
                <Icon.Tablet  size="150"/>
            </Card>
            </div>
          </div>
        </div>
        <div style={{background: 'green', padding: '10px 30px', height : '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h3>Web Development</h3>
            <p>lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10</p>
            <p>lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10lorum ipsum 10</p>
            
        </div>
      </div>
      <br />
      {/* <header class="header">
        <div class="logo-box">
            <img class="logo" src={require("../assests/react.png")} alt="Logo" />
        </div>
        <div class="text-box">
            <h1 class="heading-primary">
                <span class="heading-primary-main">trains</span>
                <span class="heading-primary-sub">cphbusiness</span>
            </h1>
            <a href="#root" class="btn btn-white btn-animated">See Trips</a>
        </div>
    </header> */}
    </Layout>
  );
}

export default Services;
import React from "react";

import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import * as Icon from 'react-feather'
import {useHistory} from 'react-router-dom'


function WebService() {
  const history = useHistory()
  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Web Development" />
          <div className="">
            <h2>We offer:</h2>
          </div>
          <div className="row web_section1" style={{display:'flex', flexDirection:'row'}}>
            <Icon.CameraOff  size="250" style={{margin: '0px 20px'}}/>
            <p className="desc">
                The software development services that our company provides cover the entire product life-cycle.
                The software development services that our company provides cover the entire product life-cycle.
                The software development services that our company provides cover the entire product life-cycle.
                The software development services that our company provides cover the entire product life-cycle.
                The software development services that our company provides cover the entire product life-cycle.
                The software development services that our company provides cover the entire product life-cycle.
                The software development services that our company provides cover the entire product life-cycle.
                The software development services that our company provides cover the entire product life-cycle.
            </p>          
          </div>
          <div style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
            <button className="serve_btn"  onClick={() => history.push("/contact")}>Apply here</button>
          </div>
        </div>
      </div>
      <br />
    </Layout>
  );
}

export default WebService;
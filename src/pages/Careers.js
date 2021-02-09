import React, {useState} from "react";

import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import JobCard from "../components/JobCard";
import * as Icon from 'react-feather'
import Modal from 'react-modal'

function Careers() {
    const [showModal, setShowModal] = useState(false)
    const [file, setFile] = useState(null)
  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Careers" />
          <div className="">
            <h2>We have the following openings:</h2>
          </div>
          <div className="row web_section1">
            <JobCard title="React Developer Required" onApply={() => setShowModal(true)} >
            <Icon.Monitor size="150"/>
            </JobCard>  
            <JobCard title="Q/A Tester Required" onApply={() => console.log('lets apply')} >
            <Icon.Tool size="150"/>
            </JobCard>  
            <JobCard title="Digital Marketing Specialist" onApply={() => console.log('lets apply')} >
            <Icon.Mail size="150"/>
            </JobCard>          
          </div>
          <div className="row web_section1">
            <JobCard title="React Developer Required" onApply={() => console.log('lets apply')} >
            <Icon.Monitor size="150"/>
            </JobCard>  
            <JobCard title="Q/A Tester Required" onApply={() => console.log('lets apply')} >
            <Icon.Tool size="150"/>
            </JobCard>  
            <JobCard title="Digital Marketing Specialist" onApply={() => console.log('lets apply')} >
            <Icon.Monitor size="150"/>
            </JobCard>          
          </div>
        </div>
        <Modal
          className="modal1"
          style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.8)', zIndex:1000 } }}
          id='modal'
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
        >
            <h5  style={{color: '#282c34', textAlign:'center', margin: '10px 0px'}}>Upload your CV to apply</h5>
            <input type="file" name="file" id="file" className="inputfile" onChange={e => setFile(e.target.files[0])} />
            <label for="file">Choose a file</label>
            <h6 style={{color: 'black', textAlign:'center'}}>{file && file.name}</h6>
            <button className="btn1" style={{color: 'black'}}> Send CV</button>
        </Modal>
      </div>
      <br />
    </Layout>
  );
}

export default Careers;
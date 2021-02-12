import React, { useState } from 'react'
import * as Icon from 'react-feather'
import Sectiontitle from '../components/Sectiontitle'
import Layout from '../components/Layout'
import axios from 'axios'
import { baseUrl } from '../assests/serverdetails'

function Contact() {
  const [phoneNumbers, setPhoneNumbers] = useState(["112233", "009900"])
  const [emailAddress, setEmailAddress] = useState(["info@doable.dk"])
  const [address, setAddress] = useState(["Copenhagen"])
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    cv: null
  })
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const submitHandler = event => {
    event.preventDefault()
    if (!formdata.name) {
      setError(true)
      setMessage('Name is required')
    } else if (!formdata.email) {
      setError(true)
      setMessage('Email is required')
    } else if (!formdata.subject) {
      setError(true)
      setMessage('Subject is required')
    } else if (!formdata.message) {
      setError(true)
      setMessage('Message is required')
    } else {
      setError(false)
      setMessage('You message has been sent!!!')
    }
    const { name, email, message, subject, cv } = formdata
    console.log(formdata)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const formData = new FormData()
    formData.append("cv", cv)
    formData.append("name", name)
    formData.append("email", email)
    formData.append("message", message)
    formData.append("subject", subject)

    axios.post(`${baseUrl}/sendmail`, formData, config).then(response => {
      console.log(response)
      if(response?.data?.info?.message === 'success') {
        alert("Sent successfully")
      } else {
        alert("Error sending mail.")
      }
    }).catch(error => {
      console.log(error)
    })

  }
  const handleChange = event => {
    if(event.currentTarget.name === "cv") {
      console.log(event.target.files)
      setFormdata({
        ...formdata,
        [event.currentTarget.name]: event.target.files[0]
      })
    } else {
      setFormdata({
        ...formdata,
        [event.currentTarget.name]: event.currentTarget.value
      })
    }
    
  }
  const numberFormatter = number => {
    const phnNumber = number
    return phnNumber
  }

  const handleAlerts = () => {
    if (error && message) {
      return <div className='alert alert-danger mt-4'>{message}</div>
    } else if (!error && message) {
      return <div className='alert alert-success mt-4'>{message}</div>
    } else {
      return null
    }
  }

  

  return (
    <Layout>
      <div className='mi-contact-area mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Contact Me' />
          <div className='row'>
            <div className='col-lg-6'>
              <div className='mi-contact-formwrapper'>
                <h4>Get In Touch</h4>
                <form
                  action='#'
                  className='mi-form mi-contact-form'
                  onSubmit={submitHandler}
                >
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-name'>Enter your name*</label>
                    <input
                      onChange={handleChange}
                      type='text'
                      name='name'
                      id='contact-form-name'
                      value={formdata.name}
                    />
                  </div>
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-email'>
                      Enter your email*
                    </label>
                    <input
                      onChange={handleChange}
                      type='text'
                      name='email'
                      id='contact-form-email'
                      value={formdata.email}
                    />
                  </div>
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-subject'>
                      Enter your subject*
                    </label>
                    <input
                      onChange={handleChange}
                      type='text'
                      name='subject'
                      id='contact-form-subject'
                      value={formdata.subject}
                    />
                  </div>
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-subject'>
                      Send File*
                    </label>
                    <input
                      style={{paddingTop: '10px', paddingLeft: '20px'}}
                      onChange={handleChange}
                      type='file'
                      name='cv'
                      id='contact-form-subject'
                    />
                  </div>
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-message'>
                      Enter your Message*
                    </label>
                    <textarea
                      onChange={handleChange}
                      name='message'
                      id='contact-form-message'
                      cols='30'
                      rows='6'
                      value={formdata.message}
                    ></textarea>
                  </div>
                  <div className='mi-form-field'>
                    <button className='mi-button' type='submit'>
                      Send Mail
                    </button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mi-contact-info'>
                {!phoneNumbers ? null : (
                  <div className='mi-contact-infoblock'>
                    <span className='mi-contact-infoblock-icon'>
                      <Icon.Phone />
                    </span>
                    <div className='mi-contact-infoblock-content'>
                      <h6>Phone</h6>
                      {phoneNumbers.map(phoneNumber => (
                        <div key={phoneNumber}>
                          <p href={numberFormatter(phoneNumber)}>
                            {phoneNumber}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {!emailAddress ? null : (
                  <div className='mi-contact-infoblock'>
                    <span className='mi-contact-infoblock-icon'>
                      <Icon.Mail />
                    </span>
                    <div className='mi-contact-infoblock-content'>
                      <h6>Email</h6>
                      {emailAddress.map(email => (
                        <p key={email}>
                          <a href={`mailto:${email}`}>{email}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {!phoneNumbers ? null : (
                  <div className='mi-contact-infoblock'>
                    <span className='mi-contact-infoblock-icon'>
                      <Icon.MapPin />
                    </span>
                    <div className='mi-contact-infoblock-content'>
                      <h6>Address</h6>
                      <p>{address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
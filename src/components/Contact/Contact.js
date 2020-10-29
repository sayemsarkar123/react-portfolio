import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import resumeData from '../../resumeData';
import { useForm } from "react-hook-form";

const Contact = () => {
  const { email, phone, address: { street, city } } = resumeData.main;
  const { register, handleSubmit, errors } = useForm();
  console.log("ERROR", errors);
  const onSubmit = data => {
    console.log(data);
    // do some stuff here with the data
  };
  return (
    <div style={{animation: 'fade 0.3s linear'}} className="row px-3">
      <div className="col-md-12">
        <div>
          <h6 style={{color: '#FE4A57'}} className="text-center mt-3">HAVE ANY QUERY?</h6>
          <h3 className="text-white text-center font-weight-bolder my-3">Contact Me</h3>
          <div style={{width: '50px', height: '2.5px', backgroundColor: '#FE4A57'}} className="mx-auto"></div>
        </div>
      </div>
      <div className="col-md-4 rounded my-4">
        <div style={{backgroundColor: '#1F2235', height: '7.5rem'}} className="d-flex py-3">
          <div className="mx-4">
            <span style={{color: '#ff4a57', fontSize: '32px'}}><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
          </div>
          <div>
            <span className="text-white font-weight-bolder">Locate us</span>
            <p className="text-white">{`${street}, ${city}`}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 rounded my-4">
        <div style={{backgroundColor: '#1F2235', height: '7.5rem'}} className="d-flex py-3">
          <div className="mx-4">
            <span style={{color: '#ff4a57', fontSize: '32px'}}><FontAwesomeIcon icon={faPhoneAlt} /></span>
          </div>
          <div>
            <span className="text-white font-weight-bolder">Give us a call</span>
            <p className="text-white">{`Phone: ${phone}`}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 rounded my-4">
        <div style={{backgroundColor: '#1F2235', height: '7.5rem'}} className="d-flex py-3">
          <div className="mx-4">
            <span style={{color: '#ff4a57', fontSize: '32px'}}><FontAwesomeIcon icon={faEnvelope} /></span>
          </div>
          <div>
            <span className="text-white font-weight-bolder">Get in online</span>
            <p className="text-white">{email}</p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="form-row wasValidated">
            <div className="col-md-6 mb-3">
              <input name="name" ref={register({ required: { value: true, message: 'The field cannot be empty' } })} className="form-control pl-4 py-4" type="text" placeholder="Your Name" />
              <div className="invalid-feedback">{errors.name?.message}</div>
            </div>
            <div className="col-md-6 mb-3">
              <input name="email" ref={register({ required: { value: true, message: 'The field cannot be empty' } })} className="form-control pl-4 py-4" type="email" placeholder="Your Email" />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="col-md-12 mb-3">
              <input name="subject" ref={register({ required: { value: true, message: 'The field cannot be empty' } })} className="form-control pl-4 py-4" type="text" placeholder="Your Subject" />
              <div className="invalid-feedback">{errors.subject?.message}</div>
            </div>
            <div className="col-md-12 mb-3">
              <textarea name="message" ref={register({ required: { value: true, message: 'The field cannot be empty' } })} className="form-control pl-4" placeholder="Your Message"></textarea>
              <div className="invalid-feedback">{errors.message?.message}</div>
            </div>
          </div>
          <input className="px-4 rounded-pill font-weight-bold text-white border-0" type="submit" value="Send Message"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
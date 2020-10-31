import React from 'react';
import { Link } from 'react-router-dom';
import resumeData from '../../resumeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typewriter from 'typewriter-effect';
import './Main.css';
import Particles from 'react-particles-js';

const Main = () => {
  const { name, occupation, description, image, social, resumedownload } = resumeData.main;
  const imageStyle = { width: '150px', height: '150px', borderRadius: '50%' };
  const iconStyle = { width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #FF4A57', backgroundColor: '#1F2235' };
  const openTab = url => window.open(url);
  const bubblesPreset = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
          }
      }
  }
  return (
    <div style={{animation: 'fade 0.3s linear', zIndex: '1'}} className="h-100 d-flex flex-column justify-content-center text-center position-relative">
      <img className="mx-auto" style={imageStyle} src={image} alt="" />
      <h2 className="text-white font-weight-bold my-4 d-flex justify-content-center">Hi, I am&nbsp; <span style={{color: '#FF4A57'}}><Typewriter
  options={{
    strings: [name, occupation],
    autoStart: true,
    loop: true,
  }}
/></span></h2>
      <p style={{fontSize: '17px'}} className="text-white w-75 mx-auto">{description}</p>
      <ul className="d-flex justify-content-center mt-3 list-unstyled">
        {
          social.map(({ url, icon }, idx) => (
            <li key={idx} className="ml-3 d-flex icon" style={iconStyle}>
              <Link className="m-auto" style={{fontSize: '25px', color: '#ffffff'}} onClick={() => openTab(url)}><FontAwesomeIcon icon={icon} /></Link>
            </li>
          ))
        }
      </ul>
      <div className="mt-3">
        <button onClick={() => openTab(social[1].url)} style={{backgroundColor: '#23263A', border: '2px solid #FF4A57'}} className="px-4 rounded-pill text-white font-weight-bold">Hire Me Now</button>
        <button onClick={() => openTab(resumedownload)} style={{backgroundColor: '#23263A', border: '2px solid #FF4A57'}} className="px-4 rounded-pill text-white font-weight-bold ml-3">Download CV</button>
      </div>
      <div style={{top: '0', left: '0', width: '100%', height: '100%', zIndex: '-1'}} className="position-absolute">
      <Particles params={bubblesPreset} />
      </div>
    </div>
  );
};

export default Main;
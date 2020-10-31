import React from 'react';
import styled, { keyframes } from 'styled-components';
import resumeData from '../../resumeData';

const Skills = () => {
  const { skills } = resumeData.resume;
  const animation = ({width}) => {
    return keyframes`
      0% {
        width: 0;
      }
      100% {
        width: ${width};
      }
    `
  }
  const Progress = styled.div`
    animation: ${props => animation} 0.5s linear;
    height: 5px;
    background-color: #FE4A57;
    width: ${props => props.width};
    position: relative;
  `
  return (
    <div style={{animation: 'fade 0.3s linear'}} className="row px-3">
      <div className="col-md-12">
        <div>
          <h3 className="text-white text-center font-weight-bolder mt-5 mb-3">My Skills</h3>
          <div style={{width: '50px', height: '2.5px', backgroundColor: '#FE4A57'}} className="mx-auto mb-5"></div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row">
          {
            skills.map(({name, level}, idx) => (
              <div key={idx} className="col-md-6 mt-4">
                <div>
                  <span style={{color: '#FAFAFA', fontWeight: '500',fontSize: '18px'}} className="d-inline-block mb-2">{name}</span>
                  <Progress width={level}><div style={{right: '0', bottom: 'calc(100% + 8px)'}} className="position-absolute font-weight-bolder text-white">{level}</div></Progress>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;
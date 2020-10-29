import React from 'react';
import resumeData from '../../resumeData';

const Skills = () => {
  const { skills } = resumeData.resume;
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
                  <div style={{ width: level, height: '5px', backgroundColor: '#FE4A57' }} className="position-relative">
                    <div style={{right: '0', bottom: 'calc(100% + 8px)'}} className="position-absolute font-weight-bolder text-white">{level}</div>
                  </div>
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
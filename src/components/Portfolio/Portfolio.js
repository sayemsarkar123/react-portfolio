import React from 'react';
import resumeData from '../../resumeData';
import Project from '../Project/Project';

const Portfolio = () => {
  const { projects } = resumeData.portfolio;
  return (
    <div style={{animation: 'fade 0.3s linear'}} className="row px-3">
      <div className="col-md-12">
        <div className="text-center">
          <h3 className="text-white text-center font-weight-bolder mt-3 mb-3">Portfolio Showcase</h3>
          <div style={{width: '50px', height: '2.5px', backgroundColor: '#FE4A57'}} className="mx-auto mb-4"></div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row">
          {
            projects.map((project, idx) => <Project key={idx} project={project}></Project>)
          }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
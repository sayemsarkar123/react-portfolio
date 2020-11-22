import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Project = ({ project: { title, overview, technology, imgurl, repo, live }, filterProjects}) => {
  const openTab = url => window.open(url);
  return (
    <div className="col-md-4 text-white rounded mb-4">
      <div style={{backgroundColor: '#1F2235'}}>
        <div>
          <img style={{height: '225px'}} className="w-100 rounded-top" src={imgurl} alt=""/>
        </div>
        <div className="p-4">
          <h5>{title}</h5>
          <small>{overview}</small>
          <ul style={{marginLeft: '-8px'}} className="list-unstyled d-flex flex-wrap">
            {
              technology.map((name, idx) => (
                <li onClick={() => filterProjects(name)} style={{backgroundColor: '#23263A', fontSize: '13px', cursor: 'pointer'}} className="px-2 py-2 ml-2 mt-2 rounded" key={idx}>{name}</li>
              ))
            }
          </ul>
          <div>
            <Link style={{ color: '#FF4A57' }} onClick={() => openTab(repo)} ><FontAwesomeIcon icon={faGithub} /></Link>
            <Link style={{color: '#FF4A57'}} className="ml-3" onClick={() => openTab(live)} ><FontAwesomeIcon icon={faExternalLinkAlt} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
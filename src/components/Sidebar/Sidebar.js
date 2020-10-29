import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ setComponent }) => {
  return (
    <div className="m-auto">
      <ul className="p-0 list-unstyled text-center nav-menu">
        <li><Link onClick={() => setComponent('Home')} to="">Home</Link></li>
        <li><Link onClick={() => setComponent('Portfolio')} to="">Portfolio</Link></li>
        <li><Link onClick={() => setComponent('Blog')} to="">Blog</Link></li>
        <li><Link onClick={() => setComponent('Skills')} to="">Skills</Link></li>
        <li><Link onClick={() => setComponent('Contact')} to="">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
import React, { useState } from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';
import Portfolio from '../Portfolio/Portfolio';
import Sidebar from '../Sidebar/Sidebar';
import Skills from '../Skills/Skills';

const Home = () => {
  const [component, setComponent] = useState('Home');
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div style={{top: '0', bottom: '0', left: '0',backgroundColor: '#1f2235'}} className="col-md-3 position-fixed d-flex">
          <Sidebar setComponent={setComponent}></Sidebar>
        </div>
        <div style={{backgroundColor: '#23263a'}} className="col-md-9 ml-auto">
          {
            component === 'Home'
              ? <Main></Main>
              : component === 'Portfolio'
                ? <Portfolio></Portfolio>
                : component === 'Blog'
                  ? <Blog></Blog>
                  : component === 'Skills'
                    ? <Skills></Skills>
                    : component === 'Contact'
                      ? <Contact></Contact>
                      : null
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
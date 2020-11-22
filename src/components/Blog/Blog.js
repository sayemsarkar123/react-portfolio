import React from 'react';
import resumeData from '../../resumeData';
import './Blog.css';

const Blog = () => {
  const { blog } = resumeData;
  const openTab = url => window.open(url);
  return (
    <div style={{ animation: 'fade 0.3s linear' }} className="row">
      <div className="col-md-12">
        <div className="text-center">
          <h3 className="text-white text-center font-weight-bolder mt-3 mb-3">Blog</h3>
          <div style={{width: '50px', height: '2.5px', backgroundColor: '#FE4A57'}} className="mx-auto mb-4"></div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row">
          {
            blog.map(({ name, url, img }, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className="rounded">
                  <div>
                    <img className="img-fluid" src={img} alt=""/>
                  </div>
                  <div style={{backgroundColor: 'rgb(31, 34, 53)'}} className="p-3">
                    <h5 onClick={() => openTab(url)} className="text-white blog-title">{name}</h5>
                    <small className="text-white mt-3 d-block">Abu Sayem Sarkar</small>
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

export default Blog;
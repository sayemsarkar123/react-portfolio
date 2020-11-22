import React, { useState } from 'react';
import resumeData from '../../resumeData';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState(resumeData.blog);
  const filterBlog = (name) => {
    const filterItems = blogs.filter(blog => blog.tags.find(tag => tag === name));
    setBlogs(filterItems);
  }
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
            blogs.map(({ title, url, img, tags, author }, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className="rounded">
                  <div>
                    <img className="img-fluid" src={img} alt=""/>
                  </div>
                  <div style={{backgroundColor: 'rgb(31, 34, 53)'}} className="p-3">
                    <h5 onClick={() => openTab(url)} className="text-white blog-title">{title}</h5>
                    <ul style={{marginLeft: '-8px'}} className="list-unstyled d-flex flex-wrap">
                    {
                      tags.map((tag, idx) => (
                        <li onClick={() => filterBlog(tag)} style={{backgroundColor: '#23263A', fontSize: '13px', cursor: 'pointer'}} className="px-2 py-2 ml-2 mt-2 rounded text-white" key={idx}>{tag}</li>
                    ))
                      }
                      </ul>
                    <small className="text-white mt-3 ml-1 d-block">{author}</small>
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
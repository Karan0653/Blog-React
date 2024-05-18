import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({blogs}) => {

  return (
    <div className="blog-list">
        <h2>All Blogs!</h2>
        {blogs.map( blog => <div className='blog-preview' key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
            <Link style={{display:'block',width:'45px',textDecoration:'none',color:'white',backgroundColor:'#f1356d',padding:'5px 7px', marginTop:'5px',borderRadius:'6px'}} to={`http://localhost:3000/blogs/${blog.id}`}>view</Link>
        </div>)}
    </div>
  ) 
}

export default BlogList
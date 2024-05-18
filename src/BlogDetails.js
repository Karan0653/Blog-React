import React, { useState } from 'react'
import { Link, redirect, useParams } from 'react-router-dom'
import useFetch from './useFetch';
import Loading from './Loading';


const BlogDetails = () => {

    const [update, setUpdate] = useState(false)
    const { id } = useParams();
    const {data:blog, error, loading} = useFetch('http://localhost:8000/blogs/' + id);

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method:'DELETE'
        }).then(() => {
            console.log('deleted');
        })
        
    }

  return (
    <div className='blog-details'>
        {loading && <Loading /> }
        { error && <div> {error} </div> }
        {blog && 
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <p>{blog.body}</p>
                <button onClick={handleDelete}>Delete</button>
            </article>
        }
    </div>
  )
}

export default BlogDetails
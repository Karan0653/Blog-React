import React, { useState } from 'react'


const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario')
  const [isPending, setIsPending] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author}
    console.log(blog);
    
    setIsPending(true)

    var url = 'http://localhost:8000/blogs'

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'title':title,'body':body,'author':author}),
      
    })
    
    .then((response) => {
      if (!response.ok) {
          // error processing
          throw 'Error';
      }
      return response.json()
  })
    .then((data)=>{
      console.log('data:',data);
      setIsPending(false)

    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog title:</label>
        <input
          name='title' 
          type="text"
          value={title}
          onChange={(e)=>{ setTitle(e.target.value)}}
          required 
        />
        <label >Blog body:</label>
        <textarea
          value={body}
          onChange={(e)=>{ setBody(e.target.value)}}
          required 
        />
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
           <option value="mario">mario</option>
           <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button>Add blog</button>}
      </form>
    </div>
  )
}

export default Create
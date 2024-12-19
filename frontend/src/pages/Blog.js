import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/posts/')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
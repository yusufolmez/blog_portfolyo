import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/projects/')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      <h1>Portfolyo</h1>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
          {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">Projeyi Görüntüle</a>}
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
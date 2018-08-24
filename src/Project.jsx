import React from 'react';

export const Project = ({project, setActiveProject}) => (
  <div className='project col-md-3' onClick={() => setActiveProject(project.name)}>
    <h2>{project.name}</h2>
      <p>{project.itemCount || 0} Items</p>
  </div>
)

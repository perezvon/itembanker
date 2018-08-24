import React from 'react';
import { Project } from './Project';

export const ManagerDashboard = ({projects, setActiveProject}) => (
  <div className='col-md-9'>
    <div className='row'>
      {projects.map((p, i) => <Project project={p} setActiveProject={setActiveProject} key={i} />)}
    </div>
  </div>
)

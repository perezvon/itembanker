import React from 'react';
import { Link } from 'react-router-dom';

export const AssignmentsTable = ({assignments}) => (
  <div className='table-responsive'>
    <table className='table table-striped table-bordered'>
      <tbody>
        <tr><th></th><th>Assignment</th><th>#</th><th>Due Date</th></tr>
        {assignments.map(a => {
          const type = a.type.toLowerCase();
          const params = a.assignment.replace(/\s/g, '+').toLowerCase();
          return (
          <tr>
            <td style={{textAlign: 'center'}}>
              <Link title={`${a.type}: ${a.assignment}`} to={`/${type}/${a.id}`}>
              <span className='icon-pencil' /></Link>
            </td>
            <td>{a.assignment}</td>
            <td>{a.number}</td>
            <td>{a.dueDate || 'none'}</td>
          </tr>)}
        )}
      </tbody>
    </table>
  </div>
)

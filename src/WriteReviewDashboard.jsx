import React from 'react';
import { AssignmentsTable } from './AssignmentsTable';

export const WriteReviewDashboard = ({write, review}) => (
  <div className='col-md-9'>
  {write.length > 0 &&
    <div>
      <h1>My Writing Assignments</h1>
      <AssignmentsTable assignments={write} />
    </div>
  }
  {review.length > 0 &&
    <div>
      <h1>My Reviewing Assignments</h1>
      <AssignmentsTable assignments={review} />
    </div>
  }
  </div>
)

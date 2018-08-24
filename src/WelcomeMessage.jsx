import React from 'react';
import { connect } from 'react-redux';
import { HelpLink } from './HelpLink';

const mapStateToProps = state => {
  return { ...state };
};
const WelcomeMessage = ({user, currentProject, location}) => (
<div className='row'>
  <div className='col-md-12'>
    Welcome, {user.name} the {user.role}
    {currentProject && <div>Current Project: {currentProject}</div>}
    <HelpLink location={location} />
  </div>
</div>
)

export default connect(mapStateToProps)(WelcomeMessage);

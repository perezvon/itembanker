import React from 'react';
import { connect } from 'react-redux';
import { HelpLink } from './HelpLink';
import { News } from './News';
import { WriteReviewDashboard } from './WriteReviewDashboard';
import { ManagerDashboard } from './ManagerDashboard';
import { setActiveProject } from './actions';

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return  {
    setActiveProject: project => dispatch(setActiveProject(project))
  }
}

const Home = ({assignments, projects, items, news, user, currentProject, setActiveProject}) => {
    const write = assignments.filter(a => a.type === 'Write');
    const review = assignments.filter(a => a.type === 'Review');
    projects.forEach(p => p.itemCount = items.filter(i => i.project === p.name).length)
    return (
    <React.Fragment>
      <div className='row'>
        { user.role === 'sme' &&
          <WriteReviewDashboard write={write} review={review} />
        }
        { user.role === 'manager' &&
          <ManagerDashboard projects={projects} setActiveProject={setActiveProject} />
        }
        <News news={news} />
        </div>
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

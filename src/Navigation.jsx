import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const mapStateToProps = state => {
  return { ...state };
};

const Navigation = ({user, currentProject}) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">ItemBanker 0.1</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {user.role === 'manager' && currentProject &&
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/items">Items <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/assets">Assets</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/exams">Exams</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/manage" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Manage
          </NavLink>
          <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item text-light" to="/item-bank">Item Bank</NavLink>
            <NavLink className="dropdown-item text-light" to="/project">Project</NavLink>
            <div className="dropdown-divider text-light"></div>
            <NavLink className="dropdown-item text-light" to="/metadata">Metadata</NavLink>
            <NavLink className="dropdown-item text-light" to="/blueprint">Blueprint</NavLink>
            <NavLink className="dropdown-item text-light" to="/users">Users</NavLink>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/import">Import</NavLink>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  }
  {user.role === 'sme' &&
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/write">Write</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/assets">Assets</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  }
</nav>
)

export default connect(mapStateToProps)(Navigation);

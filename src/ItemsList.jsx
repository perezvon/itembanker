import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return {...state};
}

const ItemsList = ({projectItems}) => {
  return (
    <React.Fragment>
      <Link to='/write'><button className='btn btn-success'>Write Item</button></Link>
      <div className='table-responsive'>
        <table className='table table-striped table-bordered table-hover'>
          <tbody>
            <tr><th>ID</th><th>Stem</th></tr>
            {projectItems.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.stem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </React.Fragment>
)}


export default connect(mapStateToProps)(ItemsList);

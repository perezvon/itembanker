import React from 'react';
import { Link } from 'react-router-dom';

export const News = ({news}) => (
  <div className='col-md-3'>
    <h1>News</h1>
    <hr />
    {news.map((n,i) => <p key={i}><strong>{n.date}</strong> <Link to={`/news/${n.slug}`}>{n.title}</Link></p>)}
  </div>
)

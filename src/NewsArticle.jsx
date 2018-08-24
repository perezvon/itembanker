import React from 'react';

const news = [{
  date: '08/01/2018',
  title: 'Everything is OK...',
  slug: 'everything-is-ok',
  content: 'Seriously, everything is pretty much OK.'
}, {
  date: '07/12/2018',
  title: 'Everything is Awesome!',
  slug: 'everything-is-awesome',
  content: 'Don\'t you wish your application was awesome like me?'
}]

export const NewsArticle = ({...props}) => {
  const slug = props.match.params.slug;
  const article = news.find(n => n.slug === slug);
  return (
    <div>
      <h1>{article.title}</h1>
      <em>{article.date}</em>
      <p>{article.content}</p>
    </div>
  )
}

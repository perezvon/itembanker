import React from 'react';

export const HelpLink = ({location}) => (
  <a href={`http://examdevhelp.pearsonvue.com/display/EDHelp/${location}`} target='_blank' style={{float: 'right'}} ><span className='icon-question' style={{fontSize: '30px'}}/></a>
)

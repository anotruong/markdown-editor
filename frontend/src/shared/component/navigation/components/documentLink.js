import React from 'react';

import './stylesheets/documentLink.css';

//This component displays the documents.
const DocumentLink = (props) => {
  // console.log(props.date)
  return (
    <div className='documentLink-container'>
      <p className='date'>{props.date}</p>
      <a href={'reddit.com'} className='link' >{props.name}</a>
    </div>
  )
}

export default DocumentLink;
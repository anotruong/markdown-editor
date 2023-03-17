import React, { useContext, useEffect } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';

import './stylesheets/docItem.css';

//This component displays the documents.
const DocumentLink = (docObj) => {
  // const { setDocId } = useContext(MarkdownContext);

  // passes in an object
  //should also accept an ID and share that via hook

  // useEffect(() => {
  //   setDocId(docObj.id);
  // }, []);

  return (
    <div className='documentLink-container'>
      <p className='date'>{docObj.date}</p>
      <p className='link' >{docObj.title}</p>
    </div>
  )
}

export default DocumentLink;
import React, { 
  // useContext, 
  // useEffect 
} from 'react';
// import { MarkdownContext } from '../../../context/markdownContext';

import './stylesheets/docItem.css';

//This component displays the documents.
const DocumentLink = (docObj) => {
  // const { setDocId } = useContext(MarkdownContext);
  let date = docObj.items.date;
  let title = docObj.items.title;
  let id = docObj.items._id;

  return (
    <div className='documentLink-container'>
      <p className='date'>{date}</p>
      <p className='link' style={{color: 'white'}}>{title}</p>
    </div>
  )
}

export default DocumentLink;
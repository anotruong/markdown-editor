import React, { 
  useContext, 
  // useEffect 
} from 'react';
import { MarkdownContext } from '../../../context/markdownContext';

import './stylesheets/docItem.css';

//This component displays the documents.
const DocumentLink = (docObj) => {
  const {
    setCurrentDocId,
    setDocTitle,
    setTextareaInput
  } = useContext(MarkdownContext);

  let date = docObj.items.date;
  let title = docObj.items.title;
  let id = docObj.items._id;
  let description = docObj.items.description;

  const docIdHandler = () => {
    setCurrentDocId(id);
    setDocTitle(title);
    setTextareaInput(description);

  }

  return (
    <div className='documentLink-container'>
      <button 
        id='docLink' 
        onClick={docIdHandler}
      >
        <p className='date'>{date}</p>
        <p className='link' style={{color: 'white'}}>{title}</p>
      </button>
    </div>
  )
}

export default DocumentLink;
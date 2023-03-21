import React, { useContext, useState } from 'react'
import { MarkdownContext } from '../../../context/markdownContext';

import './stylesheets/saveBtn.css';

const SaveButton = () => {
  const {
    textareaInput, 
    docTitle,
    currentDocId
  } = useContext(MarkdownContext);
  const [ error, setError ] = useState();

    //trigger POST with onclick of save button.
  // const saveDoc = async event => {
  //   event.preventDefault();
  
  //Need to retrieve document ID from backend to plug into 'fetch' function'
  const saveContent = async () => {

    try {
      const response = await fetch(`http://localhost:5000/navi`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: currentDocId,
          title: docTitle,
          description: textareaInput
        })
      })
      const responseData = await response.json();
    } catch(err) {
      setError(err.message || 'Something went wrong, please try again')
    }
  };

  return (
    // <div id='save-container' >
      <button 
        id='save-btn' 
        onClick={saveContent}
      />
    // </div>
  )
};

export default SaveButton;
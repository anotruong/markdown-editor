import React, { useContext } from 'react'
import { MarkdownContext } from '../../../context/markdownContext';

import './stylesheets/saveButton.css';

const SaveButton = () => {
  const { textareaInput, docTitle } = useContext(MarkdownContext);
    //trigger POST with onclick of save button.
  // const saveDoc = async event => {
  //   event.preventDefault();
  
  //Need to retrieve document ID from backend to plug into 'fetch' function'
  const saveContent = async event => {
    try {
      const response = await fetch(`http://localhost:5000/navi`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: docTitle,
          description: textareaInput
        })
      })
      const responseData = await response.json();
    } catch(err) {
      console.log(err);
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
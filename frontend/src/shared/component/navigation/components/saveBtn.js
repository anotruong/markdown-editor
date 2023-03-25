import React, { useContext, useState } from 'react'
import { MarkdownContext } from '../../../context/markdownContext';
import { useHttpClient } from '../../../hooks/http-hook';
import './stylesheets/saveBtn.css';

const SaveButton = () => {
  const {
    textareaInput, 
    docTitle,
    currentDocId
  } = useContext(MarkdownContext);

  const { isLoading, error, sendRequest } = useHttpClient();

    //trigger POST with onclick of save button.
  // const saveDoc = async event => {
  //   event.preventDefault();
  
  //Need to retrieve document ID from backend to plug into 'fetch' function'
  const saveContent = async () => {

    try {
     await sendRequest(
        `http://localhost:5001/navi/${currentDocId}`,
        'PATCH',
        JSON.stringify({
              title: docTitle + ".md",
              description: textareaInput
        }),
        {
          'Content-Type': 'application/json'
        },
      )
    } catch(err) {

    }
      // const response = await fetch(`http://localhost:5000/navi`, {
      //   method: 'PATCH',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     id: currentDocId,
      //     title: docTitle + ".md",
      //     description: textareaInput
      //   })
      // })
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
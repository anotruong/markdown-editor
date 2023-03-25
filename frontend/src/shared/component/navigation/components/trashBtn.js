import React, { useState, useContext, useEffect } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';
import { useHttpClient } from '../../../hooks/http-hook';

import '../../darkmode/darkmode.css';
import './stylesheets/trashBtn.css';

const TrashButton = () => {
  const { 
    docTitle, 
    isToggled, 
    currentDocId 
  } = useContext(MarkdownContext);
  const { sendRequest } = useHttpClient();
  const [ isTrashed, setTrashed ] = useState(false);
  const [ isDisplayed, setDisplay ] = useState('none');

  const deleteHandler = async () => {
    try {
      await sendRequest(
        `http://localhost:5001/navi/${currentDocId}`,
        'DELETE'
      )
    } catch(err) {
    };

    setDisplay('none');

    //clear 'description' and 'title' to clear
  };

  const trashHandler = () => {
    setTrashed(!isTrashed);
    console.log(`isTrashed: ${isTrashed}`)

    setDisplay(isDisplayed === 'block' ? 'none' : 'block');
  }

  return (
    <React.Fragment>
      <button id='trash-btn' onClick={trashHandler}/>

      {/* the blurred background */}  
      <div id='delete-container' style={{display: `${isDisplayed}`}}>
        <button
          id='cancel-btn'
          onClick={trashHandler}
          >
          <div id='delete-flex'>
            <div 
              id='delete-popup'
              className={!isToggled ? 'popup-dark' : 'popup-light'}
              style={{display: `${isDisplayed}`}}
              >
              <h2 id="title" style={{color: `${!isToggled ? 'white' : 'black'}`}}
              >
                Delete this Document?
              </h2>
              <p id='deleteText' style={{color: `${!isToggled ? '#C1C4CB' : '#7C8187'}`}}>
                Are you sure you want to delete the "{docTitle}" document and its contents? This action cannot be reversed.
              </p>
              <button 
                id='confirm-btn' 
                onClick={deleteHandler}
              >
                Continue & Delete
              </button>
            </div> 
          </div> 
        </button>
      </div> 
    </React.Fragment>
  )
};

export default TrashButton;
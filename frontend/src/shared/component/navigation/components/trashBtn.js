import React, { useState, useContext, useEffect } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';
import { useHttpClient } from '../../../hooks/http-hook';

import '../../darkmode/darkmode.css';
import './stylesheets/trashBtn.css';

const TrashButton = () => {
  const { docTitle, isToggled, currentDocId } = useContext(MarkdownContext);
  const { isLoading, error, sendRequest } = useHttpClient();
  const [ isTrashed, setTrashed ] = useState(false);
  const [ isDisplayed, setDisplay ] = useState('none');

  const deleteHandler = async () => {
    try {
      await sendRequest(
        `http://localhost:5001/navi/${currentDocId}`,
        'DELETE'
      )
    } catch(err) {
      // console.log(err);
    };

    setDisplay('none');
  };

  const confirmTrashHandler = () => {
    setTrashed(!isTrashed);
    console.log(`isTrashed: ${isTrashed}`)

    setDisplay(isDisplayed === 'block' ? 'none' : 'block');
  }



  return (
    // <button id='trash-button' onClick={trashHandler}/>

    <React.Fragment>
      {/* <div id='trash-container'> */}
      <button id='trash-button' onClick={confirmTrashHandler}/>

      {/* </div> */}
      {/* the blurred background */}  
      <div id='delete-container' style={{display: `${isDisplayed}`}}>
        {/* <button
          id='cancel-btn'
          onClick={trashHandler}
          > */}
          <div id='delete-flex'>
            <div 
              id='delete-popup'
              className={!isToggled ? 'popup-dark' : 'popup-light'}
              style={{display: `${isDisplayed}`}}
              // trigger={isTrashed}
              >
              <h2 id="title" style={{color: `${!isToggled ? 'white' : 'black'}`}}
              >
                Delete this Document?
              </h2>
              <p id='deleteText' style={{color: `${!isToggled ? '#C1C4CB' : '#7C8187'}`}}>
                Are you sure you want to delete the "{docTitle}" document and its contents? This action cannot be reversed.
              </p>
              <button id='closed-btn' onClick={confirmTrashHandler} />
              <button 
                id='confirm-btn' 
                onClick={deleteHandler}
              >
                Continue & Delete
              </button>
              {/* <button 
                id='cancel-btn' 
                style={{color: `${!isToggled ? 'black' : 'white'}`}}
                onClick={cancelHandler}
              /> */}
            </div> 
          </div> 
        {/* </button> */}
      </div> 
    </React.Fragment>
  )
};

export default TrashButton;
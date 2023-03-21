import React, { useState, useContext } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';

import '../../darkmode/darkmode.css';
import './stylesheets/trashBtn.css';

const TrashButton = () => {
  const { isToggled, currentDocId } = useContext(MarkdownContext);
  const [ isTrashed, setTrashed ] = useState(false);
  const [ isDisplayed, setDisplay ] = useState('none');
  // let display = 'none';

  const deleteHandler = async () => {
  
  };

  const trashHandler = () => {
    setTrashed(!isTrashed);
    console.log(`isTrashed: ${isTrashed}`)

    setDisplay(isDisplayed === 'block' ? 'none' : 'block');
  }

  return (
    // <button id='trash-button' onClick={trashHandler}/>

    <React.Fragment>
      {/* <div id='trash-container'> */}
      <button id='trash-button' onClick={trashHandler}/>

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
              >Delete this Document?</h2>
              <p id='deleteText' style={{color: `${!isToggled ? '#C1C4CB' : '#7C8187'}`}}>Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.</p>
              {/* <button id='closed-btn' onClick={trashHandler} /> */}
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
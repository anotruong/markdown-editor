import React, { useState, useContext } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';


import '../../darkmode/darkmode.css';
import './stylesheets/trashButton.css';

const TrashButton = () => {
  const { isToggled } = useContext(MarkdownContext);
  const [ isTrashed, setTrashed ] = useState(false);
  const [ isDisplayed, setDisplay ] = useState('none');
  // let display = 'none';

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
        <div id='delete-flex'>
          <div 
            id='delete-popup'
            className={!isToggled ? 'popup-dark' : 'popup-light'}
            style={{display: `${isDisplayed}`}}
            // trigger={isTrashed}
            >
            <h2 id="title">Delete this Document?</h2>
            <p>Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.</p>
            {/* <button id='closed-btn' onClick={trashHandler} /> */}
            <button 
              id='confirm-btn' 
              style={{color: `${!isToggled ? 'black' : 'white'}`}}
              onClick={trashHandler}>Continue & Delete</button>
          </div> 
        </div> 
      </div> 
    </React.Fragment>
  )
};

export default TrashButton;
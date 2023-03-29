import React, { useContext } from 'react';
import { MarkdownContext } from '../../context/markdownContext';

import '../darkmode/darkmode.css';
import './textarea.css';

// This preview will be considered a separte page for the mobile browser
//will appear next to the textarea on the tablet and desktop view.

const Textarea = (props) => {
  const { textareaInput, setTextareaInput } = useContext(MarkdownContext);
  const { isToggled } = useContext(MarkdownContext);

  //there should be a default intro text.
  //if the document is a new document, should it use the intro text?
  
  const inputHandler = (userInput) => {
    setTextareaInput(userInput);
  }

  return (
    <div 
      id='textarea-container' 
      className={!isToggled ? 'darkEditor' : 'lightEditor'}
      style={props.style}
    >
      <textarea 
        id='editor' 
        className={!isToggled ? "darkEditor" : "lightEditor"}
        rows='55' 
        value={textareaInput} 
        onInput={(e) => inputHandler(e.target.value)}
      />
      {/* this is where the markdown info go. */}
    </div>
  )
}

export default Textarea;
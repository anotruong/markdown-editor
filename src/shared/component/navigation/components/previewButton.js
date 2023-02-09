import React, { useContext } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';

import './stylesheets/previewButton.css';


const PreviewButton = () => {
  let { previewOn, setPreviewOn } = useContext(MarkdownContext)

  const previewHandler = () => {
    if (previewOn) {
      setPreviewOn(false);
      // go to markdown
    } else {
      setPreviewOn(true);
      // go to preview
    }
  };

  return(
    <div id='button-container'>
      {!previewOn ? 
        <button id="preview-off" 
        onClick={previewHandler}
        /> : <button id="preview-on" 
        onClick={previewHandler}
        />
      } 
     </div>
    // <button id="preview-on" />
  )
};

export default PreviewButton;
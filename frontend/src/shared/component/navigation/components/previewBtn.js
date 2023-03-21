import React, { useContext } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';

import '../../darkmode/darkmode.css';
import './stylesheets/previewBtn.css';


const PreviewButton = () => {
  const { previewOn, setPreviewOn } = useContext(MarkdownContext);
  const { isToggled } = useContext(MarkdownContext);

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
      <button 
        id={!previewOn ? "preview-off" : "preview-on"} 
        className={!isToggled ? 'darkPreview' : 'lightPreview'}
        onClick={previewHandler} />
     </div>
  )
};

export default PreviewButton;
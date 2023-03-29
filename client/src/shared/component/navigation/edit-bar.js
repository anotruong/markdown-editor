import React, { useContext } from 'react';
import PreviewButton from './components/previewBtn';
import { MarkdownContext } from '../../context/markdownContext';

import '../darkmode/darkmode.css';
import './edit-bar.css';

const EditBar = () => {
  const { previewOn } = useContext(MarkdownContext);
  const { isToggled } = useContext(MarkdownContext);
  const { sideMenuState } = useContext(MarkdownContext);
  const closed = '250px';
  const open = '0px';
  // const darkMode = () => !isToggled ? 'darkPreview' : 'lightPreview';

  return (
    <div 
      id='edit-container' 
      className={!isToggled ? 'darkPreview' : 'lightPreview'}
      style={{left: `${!sideMenuState ? open : closed}`}}
    >
      <p 
        id="page-title"
        className={!isToggled ? 'darkPreview' : 'lightPreview'}
      >
        {!previewOn ? 'markdown' : 'preview'}
      </p>
      <PreviewButton />
    </div>
  )
};

export default EditBar;
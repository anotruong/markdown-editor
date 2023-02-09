import React, { useContext } from 'react';
import PreviewButton from './components/previewButton';
import { MarkdownContext } from '../../context/markdownContext';

import './edit-bar.css';

const EditBar = () => {
  const {previewOn} = useContext(MarkdownContext);

  return (
    <div id='edit-container'>
      <p id="page-title">{!previewOn ? 'markdown' : 'preview'}</p>
      <PreviewButton />
    </div>
  )
};

export default EditBar;
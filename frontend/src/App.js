import React, { useState } from 'react';
import SideMenu from './shared/component/navigation/sideMenu';

// import Textarea from './shared/component/editor/textarea';
import HeaderNavi from './shared/component/navigation/headerNavi';
import EditBar from './shared/component/navigation/edit-bar.js';
import Editor from './shared/component/editor/editor.js';
// import Preview from './shared/component/editor/preview';
import { MarkdownContext } from './shared/context/markdownContext.js';

import { markdownText } from './shared/component/editor/components/introText';
import './shared/component/darkmode/darkmode.css';
import './App.css';

function App() {
  const [previewOn, setPreviewOn] = useState(false);
  const [textareaInput, setTextareaInput] = useState(markdownText);
  const [sideMenuState, setSideMenuState] = useState(false);
  const [isToggled, setToggle] = useState(true);
  const [docTitle, setDocTitle] = useState('Untitled');
  const [docId, setDocId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentDocId, setCurrentDocId] = useState('');

  return (
    <div id="App" >
      <MarkdownContext.Provider value={{
        previewOn, setPreviewOn,
        textareaInput, setTextareaInput,
        sideMenuState, setSideMenuState,
        isToggled, setToggle,
        docTitle, setDocTitle,
        docId, setDocId,
        isLoading, setIsLoading,
        currentDocId, setCurrentDocId
      }}> 
        <HeaderNavi />
        <EditBar />
        <Editor />
        <SideMenu />        
      </MarkdownContext.Provider>  
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import SideMenu from './shared/component/navigation/sideMenu';

import Textarea from './shared/component/editor/textarea';
import HeaderNavi from './shared/component/navigation/headerNavi';
import EditBar from './shared/component/navigation/edit-bar.js';
import Preview from './shared/component/editor/preview';
import { MarkdownContext } from './shared/context/markdownContext.js';

import { markdownText } from './shared/component/editor/components/introText';

import './App.css';

function App() {
  const [previewOn, setPreviewOn] = useState(false);
  const [textareaInput, setTextareaInput] = useState(markdownText);
  const [sideMenuState, setSideMenuState] = useState(false);
  
  return (
    <div className="App">
      <MarkdownContext.Provider value={{
        previewOn, setPreviewOn,
        textareaInput, setTextareaInput,
        sideMenuState, setSideMenuState
      }}>  
        <HeaderNavi />
        {/* <SideMenu /> */}
        <EditBar />
        {!previewOn ? <Textarea /> : <Preview />}
        <SideMenu />        
      </MarkdownContext.Provider>  
    </div>
  );
}

export default App;

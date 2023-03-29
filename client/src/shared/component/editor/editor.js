import React, { useContext } from 'react';
import { MarkdownContext } from '../../context/markdownContext';
import Textarea from './textarea';
import Preview from './preview';

import '../darkmode/darkmode.css';
import './editor.css';

const Editor = () => {
  const { previewOn } = useContext(MarkdownContext);
  const { isToggled } = useContext(MarkdownContext);
  const { sideMenuState } = useContext(MarkdownContext);
  const closed = '250px';
  const open = '0px';

  const w = window.innerWidth;
  // console.log(w)


  return(
    <div 
      id='editor-container' 
      className={!isToggled ? 'darkEditor' : 'lightEditor'}
      style={{left: `${!sideMenuState ? open : closed}`}}
    >
      {w <= '1250' ? (!previewOn ? <Textarea /> : <Preview />) : <></>}
      {/* <Textarea style={{left: '0px'}}/>
      <Preview style={{right: '0px'}}/> */}
      {w >= '1250' ? 
        <>
          <Preview style={{right: '0px'}}/>
          <Textarea style={{left: '0px'}}/>
        </> : <></>}
      {/* {w >= '1250' ? <Preview style={{right: '0px'}}/> : ''} */}
    </div>
  )
};

export default Editor;
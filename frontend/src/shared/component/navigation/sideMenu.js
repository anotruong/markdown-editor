import React, { useContext } from 'react';
import { MarkdownContext } from '../../context/markdownContext.js';
import NewDocButton from './components/newDocButton.js';
import DarkmodeBtn from '../darkmode/darkmode-btn.js';
import DocumentList from './components/documentList.js';

import './sideMenu.css';

const SideMenu = () => {

  const { sideMenuState } = useContext(MarkdownContext);
  const closed = '0px';
  const open = '-250px';

  let browserWidth = window.innerWidth;

  const logState = state => {
    console.log("Toggled:", state);
  }

  return(
    <div 
      id='sideNavi-container' 
      style={{left: `${!sideMenuState ? open : closed}`}}
    >
      {browserWidth <= 1249 ? <h3 id='title' >Markdown</h3> : ''}
      <p id='myDoc'>my documents</p>
      <NewDocButton />
      <DocumentList />
      <DarkmodeBtn 
        // label="sun"
        // toggled={true}
        onClick={logState} 
      />
    </div>
  )
}

export default SideMenu;
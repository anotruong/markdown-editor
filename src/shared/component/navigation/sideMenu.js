/* 
Desktop view:
Tablet view:
Mobile View:

Icons: 
  Delete icon
  sidemenu icon
  name of the document
  new document

Effects:
  Pushes the document to the side.
*/

import React, { useContext } from 'react';
import { MarkdownContext } from '../../context/markdownContext.js';
import NewDocButton from './components/newDocButton.js';
import DarkmodeBtn from '../darkmode/darkmode-btn.js';
import './sideMenu.css';

const SideMenu = () => {

  const { sideMenuState } = useContext(MarkdownContext);
  const closed = '0px';
  const open = '-250px';

  let browserWidth = window.innerWidth;

  // console.log(typeof w )

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
      <DarkmodeBtn 
        // label="sun"
        // toggled={true}
        onClick={logState} 
      />
    </div>
  )
}

export default SideMenu;
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

import React from 'react';
import NewDocButton from './components/newDocButton.js'

import './sideMenu.css';

const SideMenu = () => {



  return(
    <div id='sideNavi-container'>
      <h3 id='title'>Markdown</h3>
      <NewDocButton />
    </div>
  )
}

export default SideMenu;
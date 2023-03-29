import React, { useContext } from 'react';

import NaviButton from './components/naviBtn';
import TrashButton from './components/trashBtn';
import SaveButton from './components/saveBtn';
import TitleInput from './components/titleInput';

import { MarkdownContext } from '../../context/markdownContext';
import './headerNavi.css';


const HeaderNavi = () => {

  const { 
    sideMenuState, 
    docTitle 
  } = useContext(MarkdownContext);
  
  const closed = '250px';
  const open = '0px';
  let browserWidth = window.innerWidth;
  let titlePosition = browserWidth > 1249 ? '266px' : '80px';


  // the title should be an input slot.

  return (
    <div 
      id='header-container'
      style={{left: `${!sideMenuState ? open : closed}`}}
    >
      <div id='header-menu'>
        <NaviButton />
        {/* change the field into input field later
          title is saved with the save button. */}
        {browserWidth > 1249 ? <div id='markdown' /> : <></>}
        {/* <p id='doc-title' style={{left: titlePosition}}>{docTitle}</p> */}
        <TitleInput style={{left: titlePosition}} placeholder={docTitle} />
        <TrashButton />
        <SaveButton />
      </div>
    </div>
  )
}

export default HeaderNavi;
import React, { useContext } from 'react';

import NaviButton from './components/naviButton';
import TrashButton from './components/trashButton';

import SaveButton from './components/saveButton';
import { MarkdownContext } from '../../context/markdownContext';
import './headerNavi.css';


const HeaderNavi = () => {

  const { sideMenuState } = useContext(MarkdownContext);
  const closed = '250px';
  const open = '0px';
  let browserWidth = window.innerWidth;
  let titlePosition = browserWidth > 1249 ? '266px' : '80px';

  return (
    <div 
      id='header-container'
      style={{left: `${!sideMenuState ? open : closed}`}}
    >
      <div id='header-menu'>
        <NaviButton />
        {browserWidth > 1249 ? <div id='markdown' /> : <></>}
        <p id='doc-title' style={{left: titlePosition}}>Title of Doc</p>
        <TrashButton />
        <SaveButton />
      </div>
    </div>
  )
}

export default HeaderNavi;
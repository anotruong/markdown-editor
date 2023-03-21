import React, { useContext } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';

import closeBtn from '../../../images/close-btn.png';
import openBtn from '../../../images/navigation-icon.png';
import './stylesheets/naviBtn.css';

const NaviButton = () => {

  const { sideMenuState, setSideMenuState } = useContext(MarkdownContext);

  const sideMenuHandler = () => {

    if (!sideMenuState) {
      setSideMenuState(true);
    } else {
      setSideMenuState(false);
    }
  }
  
  return (
    <button id='navi-button' 
      onClick={sideMenuHandler}
      style={{backgroundImage: `url(${!sideMenuState ? openBtn : closeBtn})`}}
    > 
    </button>
  )
};

export default NaviButton;
import React, { useContext } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';

import '../headerNavi.css';
import '../edit-bar.css';
import '../sideMenu.css';
import '../../editor/preview.css';
import '../../editor/textarea.css';
import './stylesheets/naviButton.css';

const NaviButton = () => {

  // open and close button.
  // START no props
  // ONCLICK boolean 
  // HOOK useState to change the state of the button when clicked to hide menu.
    // hook state will be used to communicate between the navibutton and sidemenu modules. 

  const {sideMenuState, setSideMenuState} = useContext(MarkdownContext);



  const sideMenuHandler = () => {
    const divNames = ["header-container", "edit-container", 
    "textarea-container", 
    "preview-flex"
  ];

    if (!sideMenuState) {
      setSideMenuState(true);

      divNames.forEach(id => {
        if(document.getElementById(id)) {
          document.getElementById(id).style.marginLeft = "250px";
        }});
      
      document.getElementById("sideNavi-container").style.marginLeft = "0px";
    } else {
      setSideMenuState(false);

      divNames.forEach(id => {
        if(document.getElementById(id)) {
          document.getElementById(id).style.marginLeft = "0px";
        }});

      document.getElementById("sideNavi-container").style.marginLeft = "-250px";
    }
  }
  

  return (
    <button id='navi-button' 
      onClick={sideMenuHandler}
    > 
    </button>
  )
};

export default NaviButton;
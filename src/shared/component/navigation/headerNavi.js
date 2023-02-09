import React, { useContext } from 'react';
import EditBar from './edit-bar';
import NaviButton from './components/naviButton';
import TrashButton from './components/trashButton';
// import NewDocButton from './components/newDocButton';
import SaveButton from './components/saveButton';
import { MarkdownContext } from '../../context/markdownContext';
import './headerNavi.css';


const HeaderNavi = () => {

  const {sideMenuState, setSideMenuState} = useContext(MarkdownContext);

  const slideHandler = () => {
    if (!sideMenuState) {
      setSideMenuState(true);
      slidingNavi();
    } else {
      setSideMenuState(false);
      slidingNavi();
    }
  }

  const slidingNavi = () => {
    console.log(sideMenuState)
    if (!sideMenuState) {
      document.getElementById("header-menu").style.marginLeft = "250px"
    } else {
      document.getElementById("header-container").style.marginLeft = "0px"
    }
  }

  return (
    <div id='header-container'>
      <div id='header-menu'>
        <NaviButton 
        // onClick={slideHandler}
        />
        <p id='doc-title'>Title of Doc</p>
        <TrashButton />
        <SaveButton />
      </div>
      {/* <div id='preview-bar'> */}
        {/* <EditBar /> */}
      {/* </div> */}
    </div>
  )
}

export default HeaderNavi;
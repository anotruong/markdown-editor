import React, { useContext } from 'react';
import { MarkdownContext } from '../../context/markdownContext';
// import sun from '../../images/sunOn-moonOff.png';
// import moon from '../../images/moonOn-sunOff.png';
// import '../../images/moonOn-sunOff.png';
import '../editor/preview.css';
import '../darkmode/darkmode.css';
import './darkmode-btn.css';

const DarkmodeBtn = ({ onClick }) => {

  const {isToggled, setToggle} = useContext(MarkdownContext);

  const darkModeHandler = () => {

    setToggle(!isToggled);
    onClick(!isToggled);
  }

  return(
    <div 
      id='darkmode-btn' 
      className={!isToggled ? 'moonBG' : 'sunBG' }
    >
      <label>
        <input 
          type='checkbox' 
          defaultChecked={isToggled} 
          onClick={darkModeHandler} 
        />
        <span />
    </label>
   </div>
  )
};

export default DarkmodeBtn;
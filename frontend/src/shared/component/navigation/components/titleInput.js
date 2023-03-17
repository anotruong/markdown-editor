import React, { useContext } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';

import './stylesheets/titleInput.css';

const TitleInput = (props) => {

  const { setDocTitle } = useContext(MarkdownContext);

  // console.log(event.target.value)
  const titleHandler = event => {
    console.log(event.target.value)

    // setDocTitle(event.target.value);
    //this will set the doc title which will be then saved to the backend once the the save btn is clicked.
  }; 

  return (
    <div id="doc-title">
      <ul>
        <input 
          placeholder={props.placeholder}
          onChange={titleHandler}
        />
      </ul>
    </div>
  );
};

export default TitleInput;
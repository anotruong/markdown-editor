import { useContext, useEffect } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';

import './stylesheets/titleInput.css';

const TitleInput = (props) => {
  let browserWidth = window.innerWidth;
  let docTitleShow = browserWidth > 1239 ? <p id="doc-name">Document Name</p> : <></>; 
  
  // if (browserWidth > 1239) {
  //   docTitleShow = <p id="doc-name">Document Name</p>
  // }

  const { docTitle, setDocTitle } = useContext(MarkdownContext);

  const formatHandler = event => {
    if (docTitle.slice(-3) !== '.md') {
      setDocTitle(docTitle.concat('.md'))
    }
  };

  // console.log(event.target.value)
  const titleHandler = event => {
    let title = event.target.value;

    console.log(`titleHandler: ${docTitle}`);

    setDocTitle(title);
    //this will set the doc title which will be then saved to the backend once the the save btn is clicked.
  }; 

  return (
    <div 
      id="doc-title"
      style={{left: `${browserWidth > 1249 ? "270px" : "80px"}`}}
    >
      {docTitleShow}
      <ul 
        id='title'
        style={{height: `${browserWidth > 1249 ? "0px" : "20px"}`}}

      >
        <input 
          placeholder={props.placeholder}
          onInput={titleHandler}
        />
      </ul>
    </div>
  );
};

export default TitleInput;
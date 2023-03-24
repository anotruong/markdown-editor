import { useContext, useEffect } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';

import './stylesheets/titleInput.css';

const TitleInput = (props) => {

  const { docTitle, setDocTitle } = useContext(MarkdownContext);

  const formatHandler = event => {
    if (docTitle.slice(-3) !== '.md') {
      setDocTitle(docTitle.concat('.md'))
    }
  };

  // console.log(event.target.value)
  const titleHandler = event => {
    let title = event.target.value;
    // console.log(title);



    console.log(`titleHandler: ${docTitle}`);

    setDocTitle(title);
    //this will set the doc title which will be then saved to the backend once the the save btn is clicked.
  }; 

  return (
    <div id="doc-title">
      <ul>
        <input 
          placeholder={props.placeholder}
          onInput={titleHandler}
          // value={formatHandler}
        />
      </ul>
    </div>
  );
};

export default TitleInput;
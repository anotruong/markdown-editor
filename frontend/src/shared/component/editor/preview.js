// This preview will be considered a separte page for the mobile browser
//will appear next to the textarea on the tablet and desktop view.
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { MarkdownContext } from '../../context/markdownContext';
// ReactMarkdown will render the markdown.

import '../darkmode/darkmode.css';
import './preview.css';

const Preview = (props) => {
  const { textareaInput } = useContext(MarkdownContext);
  const { isToggled } = useContext(MarkdownContext);
  
  // The doc will have to be pulled from a database maybe. I guess two options, database or live input.
  // let tester = '**This will be ** where the markdown will happenasdfasdfasdfdsfsafasdfasdfasdfasdf.'

  return (
    <div 
      id='preview-flex' 
      className={!isToggled ? 'darkEditor' : 'lightEditor'}
      style={props.style}>
      {/* <div id='markdown'> */}
      {/* <ReactMarkdown className='markdown'> */}
      <ReactMarkdown 
        // id={!isToggled ? 'lightEditor' : 'darkEditor'} 
        // className={!isToggled ? 'lightEditor' : 'darkEditor'} 
        className={`markdown-${!isToggled ? 'dark' : 'light'}`}

        children={textareaInput} 
      />
        {/* ######### testing **This will be ** where the markdown will happenasdfasdfasdfdsfsafasdfasdfasdfasdf.
      </ReactMarkdown> */}


      {/* // </div> */}
   </div>
  )
      //   ReactDOM.render(<ReactMarkdown>
      //   **This will be ** where the markdown will happen.
      // </ReactMarkdown>)
}

export default Preview;
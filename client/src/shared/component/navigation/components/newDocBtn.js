import React, { useContext, useState } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';
import { markdownText } from '../../editor/components/introText';
import { useHttpClient } from '../../../hooks/http-hook';
import './stylesheets/newDocBtn.css';

const NewDocButton = () => {
  // const { setIsLoading } = useContext(MarkdownContext);
  // const [ setError ] = useState();
  const { isLoading, error, sendRequest } = useHttpClient();

  const newDocHandler = async () => {
    //create a new doc and save. If there are changes made then user has to click 'saveDoc btn' to save changes

    try {
      await sendRequest(
        'http://localhost:5001/sideMenu', 
        'POST', 
        JSON.stringify({
          title: 'untitled.md',
          description: markdownText
        }),
        {
          'Content-Type': 'application/json'
        },
      );
    } catch(err) {
      
    }
  };

  return (
    <div id='newDoc-container'>
      <button 
        id='newDoc-btn' 
        onClick={newDocHandler}
      >+ New Document</button>
    </div>
  )
};

export default NewDocButton;
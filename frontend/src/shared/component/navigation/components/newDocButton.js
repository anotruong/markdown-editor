import React, { useContext, useState } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';
import { markdownText } from '../../editor/components/introText';

import './stylesheets/newDocButton.css';

const NewDocButton = () => {
  const { isLoading, setIsLoading } = useContext(MarkdownContext);
  const [error, setError] = useState();
  //Create a new obj immedately with empty file.

  const newDocHandler = async () => {
    //create a new doc and save. If there are changes made then user has to click 'saveDoc btn' to save changes

    try {
      setIsLoading(true);

      const response = await fetch('http://localhost:5001/sideMenu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'untitled',
          description: markdownText
        })
      });

      const responseData = await response.json();

      if (response.ok) {
        throw new Error(responseData.message);
      }
      // console.log(responseData)

      setIsLoading(false);
    } catch(err) {
      setIsLoading(false);
      setError(err.message || 'Something went wrong, please try again')
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
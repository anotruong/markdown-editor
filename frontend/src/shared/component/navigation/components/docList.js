import React, { useContext, useEffect, useState } from 'react';
import { MarkdownContext } from '../../../context/markdownContext';
import DocItem from './docItem';

import './stylesheets/docList.css';

//This component will display a list of objects in a form of buttons/links
const DocumentList = (props) => {
  const { isLoading, setIsLoading }  = useContext(MarkdownContext);
  
  const [ error, setError ] = useState();
  const [ loadedDocs, setLoadedDocs ] = useState();

  //Figure out a way to turn data fetched from backend and plugging them into clickable links or icons.

  //the documents will be fetched by from the backend here and passed through DocumentLink.

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5001/sideMenu');
        const responseData = await response.json();
        let list = responseData.documentsList;
        let arrTest = [];

        for (props of list) {
          let object = JSON.parse(props)
          arrTest.push(object);
        }

        if (!response.ok) {
          throw new Error(arrTest.message);
        }
  
        setLoadedDocs(arrTest);
      } catch(err) {
        setError(err.message);
      }
      setIsLoading(false);

    }
    sendRequest();
  }, [isLoading])

  const errorHandler = () => {
    setError(null);
  };

  return(
    <div id='document-container' style={{color: 'white'}}>
      {!isLoading && loadedDocs && loadedDocs.map(obj => 
        <DocItem items={obj} /> 
      )}
    </div>
  );
}

export default DocumentList;
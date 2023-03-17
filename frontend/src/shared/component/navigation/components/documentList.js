import React, { useEffect, useState } from 'react';
import DocItem from './docItem';

//This component will display a list of objects in a form of buttons/links
const DocumentList = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedDocs, setLoadedDocs] = useState();

  //test object
  const tempObj = {
    test1: {
      name: 'cats.md',
      date: '01/01/2023'
    },
    test2: {
      name: 'burger.md',
      date: '02/02/2023'
    }
  };

  //Figure out a way to turn data fetched from backend and plugging them into clickable links or icons.

  //the documents will be fetched by from the backend here and passed through DocumentLink.

  let objToArr = Object.entries(tempObj);

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5001/sideMenu')
        const responseData = await response.json();

        console.log(`response: ${response}`);
        console.log(`responseData: ${responseData}`);
        if (!response.ok) {
          throw new Error(responseData.message);
        }
  
        setLoadedDocs(responseData.Docs);
      } catch(err) {
        setError(err.message);
      }
      setIsLoading(false);

    }
    sendRequest();
  }, [])

  const errorHandler = () => {
    setError(null);
  }

  return(
    <div id='document-container' style={{color: 'white'}}>
      <div className="tester">
        {/* {objToArr.map(([_, value]) => ( */}
          {/*  <DocItem items={loadedDocs} /> */}
        {/* ))} */}
      </div>
    </div>
  );
}

export default DocumentList;
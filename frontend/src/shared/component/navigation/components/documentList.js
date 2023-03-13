import React, { useEffect, useState } from 'react';
import DocumentLink from './documentLink';

//This component will display a list of objects in a form of buttons/links
const DocumentList = (props) => {
  const [isLoadinng, setIsLoading] = useState(false);
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

  let objToArr = Object.entries(tempObj);

  //retreving a list of doc objects from MongoDb
  // const fetchDocs = async event => {
  //   event.preventDefault();

  //   try {
  //     fetch('http://localhost:5000/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       title,
  //       date
  //     })
  //   })
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   const sendRequest = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch('http://localhost:5000/api/navi')
  //       const responseData = await response.json();

  //       if (!response.ok) {
  //         throw new Error(responseData.message);
  //       }
  
  //       setLoadedDocs(responseData.Docs);
  //     } catch(err) {
  //       setIsLoading(false);
  //     }
  //     setError(err.message);
  //   }
  //   sendRequest();
  // }, [])

  return(
    <div id='document-container' style={{color: 'white'}}>
      <div className="tester">
        {objToArr.map(([_, value]) => (
          <DocumentLink name={value.name} date={value.date} />
        ))}
      </div>
    </div>
  );
}

export default DocumentList;
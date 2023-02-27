import React from 'react';
import DocumentLink from './documentLink';

//This component will display a list of objects in a form of buttons/links
const DocumentList = (props) => {

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

  let objToArr = Object.entries(tempObj);


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
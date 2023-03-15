import React from 'react';

import './stylesheets/titleInput.css';

const titleInput = (props) => {

  return (
    <div id="doc-title">
      <ul>
        <input placeholder={props.placeholder}/>
      </ul>
    </div>
  );
};

export default titleInput;
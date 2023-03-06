const {v4: uuidv4} = require('uuid');
//comes with a timestamp
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');

let TESTER_OBJ = [
  {
    id: 'obj1',
    title: 'cats.md',
    description: "What is more beautiful then a kitty cat bathing in sunlight?",
    date: '20230131'
  },
  {
    id: 'obj2',
    title: 'koala love hugs.md',
    date: '20230401'
  }
];

const changeDocTitle = () => {
  // const { title } = req.body; or retrieve it fro mthe displayDoc function
  //Title will be changed when the user clicks on the title. 
  //change onEnter?
};

const displayDocTitle = (req, res, next) => {
  const { title } = req.body;
  //Match the document to the obj displayed.
}; //Display regardless if side menu is displayed or not

const deleteDoc = (req, res, next) => {
  const { id } = req.body;
  //const currentDocID; find the document's id. Have it posted to 

  if (!TESTER_OBJ.filter(obj => obj.id = id)) {
    throw new HttpError('Could not find document');
  }

  TESTER_OBJ.filter(obj => obj.id = id)
  res.status(200).json({message: 'Deleted place.'})
};

const saveDoc = (req, res, next) => {
  const errors = validationResult(req);
  if (!error.isEmpty()) {
    console.log(errors);
    throw new HttpError('Invalid inputs passed, please check', 422)
  }
  const { id, title, description } = req.body;
  
  //function should search if the id is existig and overwrite the function.
  const savedDocument = {
    id,
    title, //may not need title if save button only saves document
    description
  }

  TESTER_OBJ.push(savedDocument);
  
  res.status(200).json({docTester: savedDocument})

};


exports.changeDocTitle = changeDocTitle;
exports.displayDocTitle = displayDocTitle;
exports.deleteDoc = deleteDoc;
exports.saveDoc = saveDoc;
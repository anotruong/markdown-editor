// const {v4: uuidv4} = require('uuid');
//comes with a timestamp
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const Docs = require('../models/newDoc');

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

// const changeDocTitle = () => {
//   // const { title } = req.body; or retrieve it fro mthe displayDoc function
//   //Title will be changed when the user clicks on the title. 
//   //change onEnter?
// };

// const displayDocTitle = (req, res, next) => {
//   const { title } = req.body;
//   //Match the document to the obj displayed.
// }; //Display regardless if side menu is displayed or not

const deleteDoc = async (req, res, next) => {
  const docId = req.params.did;

  let deleteDoc;

  try {
    deleteDoc = await Docs.findById(docId);
    console.log(deleteDoc)
  } catch(err) {
    const error = new HttpError(
      'Unable to find doc', 500
    );
    return next(error);
  }

  try {
    //remove() method has been depreciated. 
    await deleteDoc.deleteOne();
  } catch(err) {
    const error = new HttpError(
      'Unable to delete', 500
    );
    return next(error);
  }
  
  res.status(200).json({message: 'Deleted place.'})
};

const saveDoc = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError('Invalid inputs passed, please check', 422)
  }
  const { title, description } = req.body;
  const docId = req.params.did;

  let openDoc;
  
  try {
    openDoc = await Docs.findById(docId);
    console.log(openDocs)
    // openDoc.updateOne()
  } catch(err) {
    const error = new HttpError(
      "Can't update", 500
    );
    next(error);
  }

  openDoc.title = title;
  openDoc.description = description;

  try {
    await openDoc.save();
  } catch(err) {
    const error = new HttpError(
      "Could not save document", 500
    );
    next(error);
  }
  
  res.status(200).json({ Docs: openDoc.toObject({ getters: true }) });

};


// exports.changeDocTitle = changeDocTitle;
// exports.displayDocTitle = displayDocTitle;
exports.deleteDoc = deleteDoc;
exports.saveDoc = saveDoc;
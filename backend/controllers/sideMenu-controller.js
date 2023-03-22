const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Docs = require('../models/newDoc');
const TodayDate = require('../models/date');
// const { modelName } = require('../models/newDoc');

// const TESTER_OBJ = [
//   {
//     id: 'obj1',
//     title: 'cat bathing in sunlight.md',
//     date: '20230131'
//   },
//   {
//     id: 'obj2',
//     title: 'koala love hugs.md',
//     date: '20230401'
//   }
// ];

const createDoc = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { title, description } = req.body;

  const createdDoc = new Docs({
    title,
    description,
    date: TodayDate()
  });

  try {
    await createdDoc.save()
  } catch(err) {
    const error = new HttpError(
      'Creating doc failed, please try again.', 500
    );
    return next(error);
  }
  res.status(201).json({Docs: createdDoc});
}

const getDocs = async (req, res, next) => {
  /*How do I want this function to run?
  
  Explicit: 
    Retrieve and return date and title for a particular document.
  
  Implicit:
    Iterates through the database.
    returns the 'date' and 'title' values.
    The uses the values and displays them on the front end.
    WOULD it be better to split the functions?

  DS: Obj -> String

  Algo:
    START takes no arguments.
    ITERATES through the database.
    RETURNS 'date' and 'title' values.

    Use POST to send a res.json to the front end.
  */

  //return a list of objects.
  let documentsList;

  try {
    documentsList = await Docs.find({}, 'date description title');
  } catch(err) {
    const error = new HttpError(
      'Fetching users failed', 500
    )
    return next(error);
  }

  res.json({
    documentsList: documentsList.map(docs => JSON.stringify(docs.toObject())) 
  });
};


// //retrieve date from mongoDb
// const getDate = async (req, res, next) => {
//   const docId = req.params.did;

//   let currentDocs;

//   try {
//     currentDocs = await Docs.findById(docId);
//   } catch(err) {
//     const error = new HttpError(
//       "Something's wrong", 500
//     );
//     return next(error);
//   }

//   if (!currentDocs) {
//     const error = new HttpError(
//       'Could not find provided Id', 404
//     );
//     return next(error);
//   }

//   res.json({ Docs: currentDocs.toObject( {getters: true }) });
// };

// // // retrieve title from mongoDB
// const getTitle = (req, res, next) => {
//   // console.log('GET request in Side Menu');
//   // res.json({message: 'side menu works!'});

//   //find the title and date
//   const titleDisplay = TESTER_OBJ.map(obj => [obj.title, obj.date]);

//   if (!titleDisplay) {
//     return next(new HttpError('Could not find a place for provided user id'));
//   }

//   // const fileDates = TESTER_OBJ.map(obj)
//   // console.log(fileDisplay)
//   res.json({titleDisplay})

// };

exports.createDoc = createDoc;
// exports.getDate = getDate;
exports.getDocs = getDocs;
// exports.getTitle = getTitle;
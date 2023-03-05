// const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const NewDoc = require('../models/newDoc');
const TodayDate = require('../models/date');

const TESTER_OBJ = [
  {
    id: 'obj1',
    title: 'cat bathing in sunlight.md',
    date: '20230131'
  },
  {
    id: 'obj2',
    title: 'koala love hugs.md',
    date: '20230401'
  }
];

const createDoc = async(req, res, next) => {
  await validationResult(req);

  const { title, description } = req.body;

  const createdDoc = new NewDoc({
    title,
    description,
    date: TodayDate()
  });

  try {
    //built in function for mongoose. Will autocreate 'id' in database
    //It's also an async function as it's a promise.
    await createdDoc.save();
  } catch(err) {
    const error = new HttpError(
      'Creating doc failed, please try again.', 500
    );
    return next(error);
  }


  res.status(201).json({newDox: createdDoc})

}

//retrieve date from mongoDb
const getDate = (req, res, next) => {
  // const dateDisplay = TESTER_OBJ.map(obj => obj.date);

  // if (!dateDisplay) {
  //   return next(new HttpError('Could not find a place for provided user id'));
  // }

  res.json({dateDisplay});


}

// retrieve title from mongoDB
const getTitle = (req, res, next) => {
  // console.log('GET request in Side Menu');
  // res.json({message: 'side menu works!'});

  //find the title and date
  const titleDisplay = TESTER_OBJ.map(obj => [obj.title, obj.date]);

  if (!titleDisplay) {
    return next(new HttpError('Could not find a place for provided user id'));
  }

  // const fileDates = TESTER_OBJ.map(obj)
  // console.log(fileDisplay)
  res.json({titleDisplay})

};

exports.createDoc = createDoc;
exports.getDate = getDate;
exports.getTitle = getTitle;

// const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const newDoc = require('../models/newDoc');
const TodayDate = require('../models/date');
const { modelName } = require('../models/newDoc');

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

const createDoc = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { title, description } = req.body;

  // console.log(db.version())

  const createdDoc = new newDoc({
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

  
  res.status(201).json({newDoc: createdDoc});
}

//retrieve date from mongoDb
const getDate = (req, res, next) => {
  // const dateDisplay = TESTER_OBJ.map(obj => obj.date);

  // if (!dateDisplay) {
  //   return next(new HttpError('Could not find a place for provided user id'));
  // }

  res.json({dateDisplay});
};

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

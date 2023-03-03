const { v4: uuidv4 } = require('uuid');
const { validatorResult } = require('express-validator');

const HttpError = require('../models/http-error');

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

const createDoc = (req, res, next) => {
  validatorResult(req);

  const { title, description } = req.body;

  const createdDoc = {
    id: uuidv4(),
    title,
    description
    // date will be added later using a built in method.
  }

  res.status(201).json({newDox: createdDoc})

}

//retrieve date from mongoDb
const getDate = (req, res, next) => {
  const dateDisplay = TESTER_OBJ.map(obj => obj.date);

  if (!dateDisplay) {
    return next(new HttpError('Could not find a place for provided user id'));
  }

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

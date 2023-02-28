const express = require('express');

const router = express.Router();

// create a new document
const createDocument = (req, res, next) => {
  const { title, description, date } = req.body;

  const newDoc = {
    name: title,
    description,
    date
  };

  TESTER_OBJ.push(newDoc); //unshift(newDoc)

  res.status(201).json(); //status code that means new item created.
}

// router.get('/', (req, res, next) => {
//   console.log('GET request in Places'); 

//   // takes any data that can be be converted to valid json. string/array/obj/boolean
//   res.json({message: 'It works!'});
// });

module.exports = router;
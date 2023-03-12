const express = require('express');
const { check } = require('express-validator');

const sideMenuControllers = require('../controllers/sideMenu-controller');

const HttpError = require('../models/http-error');

const router = express.Router();

// will return date
router.get('/:did', sideMenuControllers.getDate);

// Will return entire obj 
router.get('/', sideMenuControllers.getDocs);

//create a new document
router.post(
  '/', 
  [
    check('title')
      .not()
      .isEmpty(),
    check('description')
      .isLength({ min: 5 })
  ],
  sideMenuControllers.createDoc);
  //Do we need to validate a new document?


router.patch('/'); //new document


module.exports = router;
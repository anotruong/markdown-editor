const express = require('express');
const { check } = require('express-validator');

const sideMenuControllers = require('../controllers/sideMenu-controller');

const HttpError = require('../models/http-error');

const router = express.Router();

// will return date
router.get('/', sideMenuControllers.getDate);

// Will return title 
router.get('/', sideMenuControllers.getTitle);

//create a new document
router.post('/', sideMenuControllers.createDoc);
  //Do we need to validate a new document?


module.exports = router;
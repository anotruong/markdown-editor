const express = require('express');

const sideMenuControllers = require('../controllers/sideMenu-controller');

const HttpError = require('../models/http-error');

const router = express.Router();


// will return date
router.get('/', sideMenuControllers.getDate);

// Will return title 
// router.get('/', sideMenuControllers.getTitle);

module.exports = router;
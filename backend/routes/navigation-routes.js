const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const naviController = require('../controllers/navigation-controller');

router.post('/', 
  [
    check('title')
      .not()
      .isEmpty(),
    check('description')
      .not()
      .isEmpty()
      .isLength({ min: 5 })
  ], 
    naviController.saveDoc); //'description' is the markdown document

// router.patch('/', naviController.saveDoc);

router.delete('/', naviController.deleteDoc); 

module.exports = router;
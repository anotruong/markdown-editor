const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const navigation = require('../controllers/navigation-controller');

// router.post('/', places)

router.patch('/', navigation.changeDocTitle);

router.patch('/:did', navigation.saveDoc); //save document

router.delete('/:did', navigation.deleteDoc); //delete document

module.exports = router;
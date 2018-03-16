const express = require('express');
let router = express.Router();

// Need the controllers

const entryController = require('../controllers/entryController');

// Try to route to my entry_list
router.get('/', entryController.entry_list);


module.exports = router;

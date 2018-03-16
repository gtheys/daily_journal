const express = require('express');
let router = express.Router();

// Need the controllers

const entry_controller = require('../controllers/entryController');

// Try to route to my entry_list
router.get('/', entry_controller.entry_list);


module.exports = router;

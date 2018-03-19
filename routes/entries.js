const express = require('express');
let router = express.Router();

// Need the controllers

const entryController = require('../controllers/entryController');

// GET request for creating Entry. NOTE This must come before route for id (i.e. display entry).
router.get('/entry/create', entryController.entry_create_get);

// POST request for creating Author.
router.post('/entry/create', entryController.entry_create_post);

// GET request for one Author.
router.get('/entry/:id', entryController.entry_detail);

// Try to route to my entry_list
router.get('/', entryController.entry_list);

module.exports = router;

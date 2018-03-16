let Entries = require('../models/entries');

// Display all Entries
exports.entry_list = function(req, res) {
    res.render('entry_list', {title: 'Hey', message: Entries.entries()});
};


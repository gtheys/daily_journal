let Entries = require('../models/entries');

// Display all Entries
exports.entry_list = function(req, res) {
    res.render('entry_list',
        {title: 'Entries', message: Entries.entries().entries});
};

// Display detail page for a specific Entry.
exports.entry_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Entry detail: ' + req.params.id);
};

// Display Author create form on GET.
exports.entry_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Entry create GET');
};

// Handle Author create on POST.
exports.entry_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Entry create POST');
};


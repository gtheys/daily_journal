const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');
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

// Display entry  create form on GET.
exports.entry_create_get = function(req, res) {
    res.render('entry_form', {title: 'Create Entry'});
};

// Handle  entry create on POST.
exports.entry_create_post = [

    // Validate fields.
    body('text').isLength({min: 1}).trim()
        .withMessage('Can\'t post empty entry'),
    // Sanitize fields.
    sanitizeBody('text').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors.
            // Render form again with sanitized values/errors messages.
            res.render('entry_form',
            {title: 'Create Entry', entry: req.body, errors: errors.array()});
            return;
        } else {
                Entries.save(req.body.text, function(err) {
                    if (err) {
                        return next(err);
                    }
                res.redirect('/journal');
               });
        }
    },
];

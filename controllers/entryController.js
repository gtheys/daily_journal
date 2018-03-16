let  Entries = require('../models/entries');

// Display all Entries
exports.entry_list  = function (req, res) {

   res.send(Entries.entries());

};


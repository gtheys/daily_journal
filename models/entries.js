const fs = require('fs');

// Block for synchronius reading
let rawdata = fs.readFileSync('./data/mixed.json');
let obj = JSON.parse(rawdata);

exports.entries = function() { 
    return obj;
};

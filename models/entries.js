const fs = require('fs');
const uuidv4 = require('uuid/v4');


// Block for synchronius reading
let rawdata = fs.readFileSync('./data/mixed.json');
let obj = JSON.parse(rawdata);

exports.entries = function() {
    return obj;
};

exports.save = function(text, callback) {
    let uuid = uuidv4();
    let entry = {'text': text, 'uuid': uuid.replace(/-/g, '').toUpperCase()};
    obj.entries.push(entry);
    let dump = JSON.stringify(obj, null, 4);

    fs.writeFile('./data/mixed.json', dump, 'utf8', function(err) {
    if (err) {
        return callback(err);
    }
        console.log('The file was saved!');
        callback(null);
    });
};

const fs = require('fs');

function jsonKeySearch(path, ...args) {
    // If the input is invalid or if the file doesn't exist, return null.
    if (path === undefined || args === undefined || !fs.existsSync(path)) {
        return null;
    }
    // Read the file and parse it as JSON.
    let out = JSON.parse(fs.readFileSync(path, 'utf8'));
    for (var i = 1; i < arguments.length; ++i) {
    out = out[arguments[i]];
    };
    return out;

}

module.exports = jsonKeySearch;
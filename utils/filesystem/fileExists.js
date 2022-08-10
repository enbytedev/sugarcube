const fs = require('fs');

function fileExists(file){
  if (fs.existsSync(file)) {
    return true
  } else return false
}

module.exports = fileExists;
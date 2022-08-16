const updateChecker = require('./utils/updateChecker');

const logger = require('./utils/logger');

const misc = { 
    rnum: require('./utils/misc/rnum') 
};

const fsutils = { 
    fileExists: require ('./utils/filesystem/fileExists'),
    jsonValue: require ('./utils/filesystem/jsonValue')
};

// sugarcube itself.
const sugarcube = {
    updateChecker,
    logger,
    misc,
    fsutils,
};
  
module.exports = sugarcube;
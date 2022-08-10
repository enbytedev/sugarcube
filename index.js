// Logging Utilities
const logger = require('./utils/logger');

// Misc Utilities
const misc = { 
    rnum: require('./utils/misc/rnum') 
};

// Filesystem Utilities
const fsutils = { 
    fileExists: require ('./utils/filesystem/fileExists'),
    jsonValue: require ('./utils/filesystem/jsonValue')
};

// sugarcube itself.
const sugarcube = {
    logger,
    misc,
    fsutils,
};
  
module.exports = sugarcube;
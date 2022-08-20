const moment = require('moment');
const colors = require('colors');

let logLevel = 3; // Default to INFO

const log = {
    debug: (message) => {
        if (logLevel >= 4) { process.stdout.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` DEBUG > `.gray.bold+`${message}\n`.gray); };
    },
    info: (message) => {
        if (logLevel >= 3) { process.stdout.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` INFO  > `.cyan.bold+`${message}\n`.gray); };
    },
    warn: (message) => {
        if (logLevel >= 2) { process.stdout.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` WARN  > `.yellow.bold+`${message}\n`.gray); }
    },
    error: (message) => {
        if (logLevel >= 1) { process.stdout.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` ERROR > `.red.bold+`${message}\n`.gray); }
    },
    setLevel: (level) => {
        if (typeof level === 'number') {
            if (level > 4 || level < 0) {
              log.error("Invalid log level: " + level);
            } else {
              logLevel = level;
            }
          } else {
            switch (level.toUpperCase()) {
              case 'SILENT': logLevel = 0; break;
              case 'ERROR': logLevel = 1; break;
              case 'WARN': logLevel = 2; break;
              case 'INFO': logLevel = 3; break;
              case 'DEBUG': logLevel = 4; break;
            }
          }
    },
}

module.exports = log;
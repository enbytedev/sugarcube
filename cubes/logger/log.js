const moment = require('moment');
const colors = require('colors');

const log = {
    info: (message) => {
        console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` INFO  > `.cyan.bold+`${message}`.gray);
    },
    warn: (message) => {
        console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` WARN  > `.yellow.bold+`${message}`.gray);
    },
    error: (message) => {
        console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` ERROR > `.red.bold+`${message}`.gray);
    }
}

module.exports = log;
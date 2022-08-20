const {info, warn, error, debug} = require('./log');

function useObject(obj) {
    obj.log = info; // Allows sugarcube logging to be used on applications using console.log without headache
    obj.info = info;
    obj.warn = warn;
    obj.error = error;
    obj.debug = debug;
}

module.exports = useObject;
function objectProperty(obj, property) {
    return property
      .split('.')
      .reduce(function(obj, key) {
        if (obj[key] !== undefined) {
          return obj[key];
        } else {
          console.warn('Property ' + property + ' is not defined in the provided object. Returning whole object.')
          return obj;
        }
      }, obj)
}

module.exports = objectProperty;
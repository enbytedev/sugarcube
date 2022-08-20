function replaceRegex(input, replacement, ...args) {
    // If the input/replacement is invalid or if no args are provided, return null.
    if (typeof input != "string" || typeof replacement != "string" || args === undefined) {
        return null;
    }
    // Read the file and parse it as JSON.
    let out = input;

    for (var i = 2; i < arguments.length; ++i) {
    do {
        console.log(arguments[i])
        out = out.replace(arguments[i], replacement)
     } while (out.match(arguments[i]));

    };
    return out;

}

module.exports = replaceRegex;
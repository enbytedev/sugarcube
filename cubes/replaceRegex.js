function replaceRegex(input, replacement, ...args) {
    // If the input/replacement is invalid or if no args are provided, return null.
    if (typeof input != "string" || typeof replacement != "string" || args === undefined) {
        console.warn("Invalid input provided.");
        return null;
    }

    let out = input;
    for (var i = 2; i < arguments.length; ++i) {
        do {
            out = out.replace(arguments[i], replacement)
        } while (out.match(arguments[i]));
    };
    return out;

}

module.exports = replaceRegex;
function randomNumber(n) {
    if (typeof n == 'number') {
        if (n > 20) { console.warn("Maximum length to generate is 20."); return null; }
    max = Math.pow(10, n);
    var min = max / 10; // Math.pow(10, n) basically 
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return (number.toString());
    } else {
        return null;
    }
}

module.exports = randomNumber;
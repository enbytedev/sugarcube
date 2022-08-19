function randomNumber(n) {
    max = Math.pow(10, n);
    var min = max / 10; // Math.pow(10, n) basically 
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return (number.toString());
}

module.exports = randomNumber;
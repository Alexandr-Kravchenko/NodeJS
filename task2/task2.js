let sumOfRange = function(number1, number2) {
    let range = [];
    for (let i = number1; i <= number2; i += 1 ){
        range.push(i)
    }
    let result = range.reduce((prevNumber, currentNumber) => {
        return prevNumber + currentNumber
    });
    return result
}

//console.log(sumOfRange(5, 7));

export { sumOfRange };

let sumOfRange = function(number1, number2) {
    let range = [];
    for (let i = number1; i <= number2; i += 1 ){
        range.push(i)
    }
    console.log(range.reduce((prevNumber, currentNumber) => {
        return prevNumber + currentNumber
    }));
}

sumOfRange(5, 7);

let factorial = function (number) {
    let result = number;
    for (let i = number; i >= 1; i -= 1) {
        let prev = i - 1 >= 1 ? i - 1 : i 
        result *= prev
    }
    return result
}

// console.log(factorial(5));

export { factorial };

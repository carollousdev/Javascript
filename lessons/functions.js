function showName(name) {
    return "Your name is " + name;
}

console.log(showName('John')) //Output: Your name is John

function sum(num1, num2, operator) {
    let results;
    switch (operator) {
        case '+': results = num1 + num2;
            break;
        case '-': results = num1 - num2;
            break;
        case '*': results = num1 * num2;
            break;
        case '/': results = num1 / num2;
            break;
        default: results = 'Invalid operator';
    }
    return results;
}
console.log(sum(15, 10, "*")); // Output: 150

console.log(result = sum(2, 3, "+"));
console.log(result)
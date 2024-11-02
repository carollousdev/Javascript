function showName(name) {
    return "Your name is " + name;
}

console.log(showName('John')) //Output: Your name is John

function sum(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = num1 * num2;
            break;
        case '/': result = num1 / num2;
            break;
        default: result = 'Invalid operator';
    }
    return result;
}
console.log(sum(15, 10, "*")); // Output: 150
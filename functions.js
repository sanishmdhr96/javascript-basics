// function sum(a, b) {
//     let result = a + b;
//     return result
// }

// let divide = function (a, b) {
//     let result = a / b;
//     return result
// }

// console.log(sum(5, 2))
// console.log(divide(6, 2))

/**
 * 1. Input form bata value lina paryo , a and b
 * 
 * 2. On button click value ko sum garna paryo
 * 
 * 3. Sum ako value lai display gardina paryo
 * 
 */
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')

function calculate(e, action) {
    e.preventDefault();
    const a = parseInt(number1.value);
    const b = parseInt(number2.value);
    let sum;
    if (action === 'add') { sum = a + b }
    // use switch case or if else

    const output = document.getElementById('output')
    output.innerText = sum
}



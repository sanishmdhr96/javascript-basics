/**
 * Write a JavaScript program to calculate the multiplication and
 * division of two numbers (input from the user).
 */

const num1 = parseInt(prompt('Enter first number'))
const num2 = parseInt(prompt('Enter second number'))
const action = prompt('Please enter action')

function calculation(number1, number2, action) {
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        switch (action) {
            case 'multiplication':
                return alert(number1 * number2)

            case 'division':
                return alert(number1 / number2)
        }
    }
    else {
        return alert('Please enter a valid number')
    }
}

calculation(num1, num2, action)
/**
 * Write a JavaScript function to check whether an `input` is an array or not.
 */

function isArray(input) {
    if (input instanceof Array) {
        console.log('The input is array')
    } else {
        console.log('Please enter a valid array')
    }
}

isArray([1, 2, 3, 4, 5])


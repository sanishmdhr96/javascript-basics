/** 
 * 1. Arrow functions - done
 * 2. Default paramaters - done
 * 3. Template Literals
 * 4. Spread Operators
 * 5. Aysnc / sync
 * 6. Call back function
*/

// before es6
// function sum(a, b) {
//     return (a + b)
// }
// fallbacks
const sum2 = (a, b = 2) => {
    if (typeof a === 'number' && typeof b === 'number') {
        const value = a + b
        return `Result after adding ${a} and ${b} is ${value}`
    }
}

// const result2 = sum2(5, 5);
// console.log(result2)


// let fruits = ['apple', 'banana', 'grapes'];

// let newFruit = ['gwava', 'pineapple', 'orange']

// let newArray = [...fruits, ...newFruit]

// console.log('newArray', newArray)


let fruits = {
    name: 'gwava',
    shape: 'round',
    color: 'green'
};

fruits.name = '123';
fruits.hasSeeds = true

let anotherObj = {
    taste: 'sweet',
    cost: '100'
}

let newObj = { ...fruits, id: '123' }

console.log('newArray', fruits)
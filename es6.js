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
// const sum2 = (a, b = 2) => {
//     if (typeof a === 'number' && typeof b === 'number') {
//         const value = a + b
//         return `Result after adding ${a} and ${b} is ${value}`
//     }
// }

// const result2 = sum2(5, 5);
// console.log(result2)


// let fruits = ['apple', 'banana', 'grapes'];

// let newFruit = ['gwava', 'pineapple', 'orange']

// let newArray = [...fruits, ...newFruit]

// console.log('newArray', newArray)


// let fruits = {
//     name: 'gwava',
//     shape: 'round',
//     color: 'green'
// };

// fruits.name = '123';
// fruits.hasSeeds = true

// let anotherObj = {
//     taste: 'sweet',
//     cost: '100'
// }

// let newObj = { ...fruits, id: '123' }

// console.log('newArray', fruits)


//1. MAP
//2. Filter
//3. find , find vs Filter
//4. Destructuring
//5. Classes
//6. Inheritance

// 1. MAP

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let evenNumbers = number.map((item, _index) => {
//     if (item % 2 === 0) {
//         return item
//     } else {
//         return null
//     }
// })

// console.log(evenNumbers)

//2. Filter

const array = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

// let filteredArray = array.filter((item) => item.name !== 'shark').filter(fitem => fitem?.name !== 'turtle')

// console.log('filteredArray', filteredArray)

//3. find

// let filteredArray = array.find((item) => item.name === 'turtle')

// console.log('filteredArray', filteredArray)

//4. Destructuring
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'
// }

// let { name: pName, age: pAge, gender: pGen } = person

// console.log(pName)
// console.log(pAge)
// console.log(pGen)

/**
 * 5. Classes
 * 6. Inheritance
 */

/**
 * Classes -> blueprint -> object -> properties -> methods
 */

// let person = {
//     name: 'Sanish',
//     passMarks: 50,
//     fullMarks: 100,
//     obtainedMarks: 60,
//     isPass: function () {
//         if (this.obtainedMarks > this.passMarks) {
//             console.log(`${this.name} has passed with ${this.obtainedMarks} marks.`)
//         } else {
//             console.log(`${this.name} has failed.`)
//         }
//     }
// }
// person.isPass()

// let person1 = {
//     name: 'Manish',
//     passMarks: 50,
//     fullMarks: 100,
//     obtainedMarks: 60,
//     isPass: function () {
//         if (this.obtainedMarks > this.passMarks) {
//             console.log(`${this.name} has passed with ${this.obtainedMarks} marks.`)
//         } else {
//             console.log(`${this.name} has failed.`)
//         }
//     }
// }
// person1.isPass()

class Person {
    // to initialize the properties of person object
    constructor(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }

    // method to determine if a student has passed or not
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, email, passMarks, fullMarks, obtainedMarks) {
        super(name, email)
        this.passMarks = passMarks;
        this.fullMarks = fullMarks;
        this.obtainedMarks = obtainedMarks;
    }
    isPass() {
        if (this.obtainedMarks > this.passMarks) {
            console.log(`${this.name} with email ${this.email} has passed with ${this.obtainedMarks} marks.`)
        } else {
            console.log(`${this.name} has failed.`)
        }
    }
}

let person1 = new Student('Sanish', 'test@gmail.com', 50, 100, 70)

person1.greet()


// let person2 = new Person('Manish', 50, 100, 20)
// let person3 = new Person('Rnish', 50, 100, 20)
// let person4 = new Person('snish', 50, 100, 20)
// let person5 = new Person('11nish', 50, 100, 20)
// let person6 = new Person('hnish', 50, 100, 20)
// let person7 = new Person('lnish', 50, 100, 20)
// let person8 = new Person('0nish', 50, 100, 20)

// person1.isPass()
// person2.isPass()
// person3.isPass()
// person4.isPass()
// person5.isPass()
// person6.isPass()
// person7.isPass()
// person8.isPass()















// let petrolPrice = 170;

// if (petrolPrice > 150) {
//     console.log('Fill half tank')
// } else if (petrolPrice === 150) {
//     console.log('Fill full tank')
// } else if (petrolPrice === 150) {
//     console.log('Fill full tank')
// } else if (petrolPrice === 150) {
//     console.log('Fill full tank')
// } else if (petrolPrice === 150) {
//     console.log('Fill full tank')
// }
// else {
//     console.log('Go home')
// }

// for loop
// for (let i = 0; i < 3; i++) {
//     console.log('value', i)
// }

// const fruits = ['apple', 'banana', 'orange']
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[2])
// }

// for (let fruit in fruits) {
//     console.log('fruit', fruits[fruit])
// }

// fruits.forEach(element => {
//     if (element === 'apple') { console.log(element) }
// });

// let i = 1;

// while (i < 4) {
//     console.log(i)
//     i = i + 1
// }

// Sum of positive numbers

// let num = 0;
// let sum = 0;

// // num >= 0
// while (num >= 0) {
//     //  sum = sum + num
//     sum += num

//     // string -> integer -> explicit type conversion
//     num = parseInt(prompt('Enter a number:'))
// }

// // implicit type conversion
// console.log('the sum is ' + sum)

// let num = 0;
// let sum = 0;

// do {
//     //  sum = sum + num
//     sum += num

//     // string -> integer -> explicit type conversion
//     num = parseInt(prompt('Enter a number:'))

//     if (num == 2) {
//         continue;
//     }

// } while (num >= 0)

// // implicit type conversion
// console.log('the sum is ' + sum)

// odd number

// for (let i = 1; i <= 5; i++) { //1,,3,,5
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i)
// }

/**
 * Sunday -> 1
 * Monday -> 2
 * Tuesday -> 3
 * Wednesday -> 4
 * Thursday -> 5
 * Friday -> 6
 * Saturday -> 7
 */

// let day = prompt("Enter the day");

// if (day === "Sunday") {
//     console.log(1);
// } else if (day === "Monday") {
//     console.log(2);
// } else if (day === "Tuesday") {
//     console.log(3);
// } else if (day === "Wednesday") {
//     console.log(4);
// } else if (day === "Thursday") {
//     console.log(5);
// } else if (day === "Friday") {
//     console.log(6);
// } else {
//     console.log(7);
// }

// SWITCH CASE

// switch (day) {
//     case "Sunday":
//         console.log(1);
//         break;

//     case "Monday":
//         console.log(2);
//         break;

//     case "Tuesday":
//         console.log(3);
//         break;

//     case "Wednesday":
//         console.log(4);
//         break;

//     case "Thursday":
//         console.log(5);
//         break;

//     case "Friday":
//         console.log(6);
//         break;

//     case "Saturday":
//         console.log(7);
//         break;

//     default:
//         console.error("Please enter an appropriate day");
// }


console.log('--------------------------')
for (let i = 1; i <= 7; i++) {
    setTimeout(() => console.log(i), 1000)
}
console.log('--------------------------')
for (var i = 1; i <= 7; i++) {
    setTimeout(() => console.log(i), 1000)
}
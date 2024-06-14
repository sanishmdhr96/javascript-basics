// TOP BOTTOM APPROACH
/**
 * 1. Synchrornous
 * 2. Asynchronous
 *
 * */

// const a = 2;
// const b = 3;

// // SINGLE THREAD

// const addition = () => {
//     console.log('add', a + b)
// }

// const multiplication = () => {
//     console.log('multiply', a * b)
// }

// console.log('a', a)
// console.log('b', b)
// setTimeout(() => addition(), 2000)
// multiplication()

// const greet = (name, newFunc) => {
//     console.log(`Hi ${name}`)
//     newFunc()
// }

// const callBack = () => {
//     console.log('I hope you are doing well.')
// }

// greet('Sanish', callBack)

// map()
// filter()

// PROMISES
/**
 * 1. Pending
 * 2. Fulfilled
 * 3. Rejected
 *
 */
// let count = 3;

// const countValue = new Promise((resolve, reject) => {
//     if (count > 2) {
//         resolve('Count is greater than 2')
//     } else {
//         reject('Count is no valid')
//     }
// })

// countValue.then((value) => {
//     console.log('value', value)
// }).catch(err => console.log(err)).finally(() => console.log('Process completed'))

// fetch, axios
// fetch("https://fakestoreapi.com/produs")
//     .then((sanish) => sanish.json())
//     .then((res) => console.log(res[0]))
//     .catch((err) => console.log('err', err));

async function fetchData() {
    const out = document.getElementById('output')

    try {
        console.info('FETCH HANYO')
        const data = await fetch("https://fakestoreapi.com/pucts")
        console.info('FETCH JSON LAGYO')
        const response = await data.json()

        out.innerText = 'data'
        console.info('DATA DEKHAYO')
        console.log(response)
    } catch (e) {
        console.error(e.message)
    }
}




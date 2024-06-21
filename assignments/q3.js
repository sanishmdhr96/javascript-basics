/**
 * Write a JavaScript program to find the closest value to 100 from two numerical value
 */

function closest(x, y) {
    if (x === y) return;

    let x1 = Math.abs(x - 100);// 60 - 100 => 40
    let y1 = Math.abs(y - 100);// 20 - 100 => 80

    if (x1 < y1) {
        return `${x} is closer to 100`
    }

    if (y1 < x1) {
        return `${y} is closer to 100`
    }

    return 0
}

console.log(closest(60, 20))
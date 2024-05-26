// variable
// global scope
var num = 5;

num = 2; // => 5-> 2 
var num = 10; // re declare 

//functional scope
function session() {
    const number = 3;

    // Blocked scope
    if (number > 2) {
        let number2 = 1;
        number2 = 3;
    }

    console.log('number2', number)

}

session()



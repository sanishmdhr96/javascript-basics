const student = {
    firstName: "Sanish",
    rollNumber: 30,
    isPassed: true,
    mathMarks: 80,
    isGoodInMath: function () {
        if (this.mathMarks > 50) {
            console.log(`${this.firstName} is good in math`);
        } else {
            console.log(`${this.firstName} is not good in math`);
        }
    },
};

const student1 = {
    firstName: "Anish",
    rollNumber: 20,
    isPassed: false,
    mathMarks: 20,
    isGoodInMath: function () {
        if (this.mathMarks > 50) {
            console.log(`${this.firstName} is good in math`);
        } else {
            console.log(`${this.firstName} is not good in math`);
        }
    },
};

const student2 = {
    firstName: "Manish",
    rollNumber: 12,
    isPassed: true,
    mathMarks: 99,
    isGoodInMath: function () {
        if (this.mathMarks > 50) {
            console.log(`${this.firstName} is good in math`);
        } else {
            console.log(`${this.firstName} is not good in math`);
        }
    },
};

// 1. Constructor function -> hold all the properties of an object

// Constructor Function
function Student(firstname, rollno, passed, mathmarks, func) {
    this.firstName = firstname;
    this.rollNumber = rollno;
    this.isPassed = passed;
    this.mathMarks = mathmarks;
    this.isGoodInMath = function () {
        if (this.mathMarks > 50) {
            console.log(`${this.firstName} is good in math`);
        } else {
            console.log(`${this.firstName} is not good in math`);
        }
    };
    this.customFunction = func
}

const student3 = new Student('Sanish', 30, true, 80)
const student4 = new Student('Anish', 40, true, 50)
const student5 = new Student('Manish', 50, false, 20)
const student6 = new Student('Ranish', 60, true, 90)

let custFunc = function displayName() {
    console.log('My name is sanish')
}

const student7 = new Student('Danish', 70, true, 100, custFunc)
student7.customFunction()


// console.log('student3', student3.firstName)
// console.log('student4', student4.firstName)
// console.log('student5', student5.isGoodInMath())

// student.isGoodInMath();
// student1.isGoodInMath();
// student2.isGoodInMath();

/**
 * 
 * Write a JavaScript program that creates a class called University with
    properties for university name and departments. 
    Include methods to add a department, remove a department, and display all departments.
    Create an instance of the University class and add and remove
    departments.
 * 
 */

class University {
    constructor(name) {
        this.name = name;
        this.departments = []
    }

    addDepartments(department) {
        this.departments.push(department);
        console.log(`Department ${department} added to ${this.name}`)
    }

    //computer
    //science, computer, commerce
    removeDepartment(department) {
        //science , commerce 
        // this.departments = this.departments.filter(item => item !== department)
        // //science, computer, commerce
        // console.log(`Department ${department} removed from ${this.name}`)
        const index = this.departments.indexOf(department)
        // this.departments.find(item => item === department)
        if (index > -1) {
            this.departments.splice(index, 1)
            console.log(`Department ${department} removed from ${this.name}`)
        } else {
            console.log(`Department ${department} does not exists in ${this.name}`)
        }
    }

    displayDepartments() {
        if (this.departments?.length > 0) {
            this.departments.forEach((item, index) => console.log(`${index + 1}. ${item}`))
        } else {
            console.log('No Department')
        }
    }

}

const university = new University('Pokhara University')

university.addDepartments('Science')
university.addDepartments('Mathematics')
university.addDepartments('Physics')
university.addDepartments('Commerce')
university.addDepartments('Computer')


university.displayDepartments()

university.removeDepartment('English')

university.displayDepartments()

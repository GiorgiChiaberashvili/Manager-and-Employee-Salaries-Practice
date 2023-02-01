class Employee {

    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        if (this.manager === undefined) {
            this.manager = null
        } else {
            this.manager = manager;
            manager.addEmployee(this)
        }
    }


    calculateBonus(multiplier) {
        return this.salary * multiplier
    }
}


module.exports = Employee;

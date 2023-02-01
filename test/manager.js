const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager)
        this.employees = []
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }


    _totalSubSalary() {
        let sum = 0;
        this.employees.forEach(employee => {
            if (employee instanceof Manager) {
                sum += employee._totalSubSalary();
                sum += employee.salary;
            } else if (employee instanceof Employee) {
                sum += employee.salary
            }
        });
        return sum;
    }

    calculateBonus(multiplier) {
        let sum = this.salary
        sum += this._totalSubSalary
        return sum * multiplier
    }

}


module.exports = Manager;

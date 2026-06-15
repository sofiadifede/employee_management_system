//Employees
class Employee {
    constructor (name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

//Manager Class
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;   
    }

    describe() {
        return `${this.name} is a manager in the ${this.department} department and manages a team of ${this.teamSize} employees
        .`;
    }
}

//Employee and Manager Instances
const employee1 = new Employee("Sofia DiFede", "Finance");
const employee2 = new Employee("Hannah Wells", "Marketing");

const manager1 = new Manager("Garrett Graham", "Human Resources", 5);
const manager2 = new Manager("Dean DiLaurentis", "Operations", 3);

//Company class

class Company {
    constructor(name) {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }
    
}

//Instantiate Company and add employee and manager instances
const company = new Company()

company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(manager1);
company.addEmployee(manager2);

//List all employees and managers
company.listEmployees();
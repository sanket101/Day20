class Employee{

    constructor(firstName, lastName, age, salary){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._salary = salary;
    }

    set firstName(fname){
        this._firstName = fname;
    }

    get firstName(){
        return this.firstName;
    }

    set lastName(lname){
        this._lastName = lname;
    }

    get lastName(){
        return this.lastName;
    }

    set age(age){
        this._age = age;
    }

    get age(){
        return this.age;
    }

    set salary(salary){
        this._salary = salary;
    }

    get salary(){
        return this._salary;
    }
}

class RegularEmployee extends Employee{

    constructor(firstName, lastName, age, salary, vacationDays){
        super(firstName, lastName, age, salary);
        this._vacationDays = vacationDays;
    }

    set vacationDays(vacationDays){
        this._vacationDays = vacationDays;
    }

    get vacationDays(){
        return this._vacationDays;
    }
}

let o1 = new Employee('Mahesh', 'Babu', 33, 50000);
o1.Salary = 20000;
console.log(o1.Salary);

let o2 = new RegularEmployee('Waqar', 'Younis', 42, 60000);
o2.VacationDays = 15;
console.log(o2.VacationDays)

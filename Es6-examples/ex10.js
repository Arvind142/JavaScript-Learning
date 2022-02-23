class Person {
    constructor(name, city = 'Mumbai'){
        this.name=name;
        this.city=city;
    }
}

class Employee extends Person{
    constructor(salary=20000, department='NA'){
        super(); //must
        this.salary=200
        this.department=department;
    }
}
let e1= new Employee();
console.log(e1)
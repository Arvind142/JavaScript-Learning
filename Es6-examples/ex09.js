class Person {
    constructor(name, age=18) {
        this.name = name;
        this.age = age;
    }
    printinfo(){
        console.log(`${this.name} is ${this.age} years old`);
    }
}

let p1 = new Person('A',2);
console.log(typeof(p1))
console.log(p1);

let p2 = new Person('Arvind')
let p3 = new Person('Jphn',20)
console.log(p2)
console.log(p3)

p1.printinfo()
p2.printinfo()
p3.printinfo()
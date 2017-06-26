console.info('Typescrpit classes');


//Class basic example.
class Greeter {
    greeting: string;
    constructor(message: string) {
        console.info('constructor', this);
        this.greeting = message;
    }
    greet() {
        console.info('Hello ' + this.greeting);
    }
}


let greeter = new Greeter('Classes');
console.info(greeter);

//  Inheritence 

class Animal {
    name: string;
    constructor(thName: string) {
        this.name = thName;
    }
    move(distanceInMeter: number = 0) {
        console.log(`${this.name} moved ${distanceInMeter}m.`);
    }
}


class Snake extends Animal {
    constructor(name: string) {
        super(name);
        // this.name = name;
    }
    move(distanceInMeter: number = 5) {
        console.log("Slithering...");
        // super(distanceInMeter);
        super.move(distanceInMeter);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// Public, private, and protected modifiers
// Public by default

class Animal1 {
    private name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let a: Animal1 = new Animal1('hello brother');
a.move(345);
// console.info(a.name;

class AnimalCity {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

class Rhino extends AnimalCity {
    constructor() {
        super("Rhino");
        // console.info(this.name);
    }
}

class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let animal = new AnimalCity("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");


console.info(animal);
animal = rhino;
console.info(animal);

// animal = employee; // Error: 'Animal' and 'Employee' are not compatible



//Protected 


// class Person {
//     protected name: string;
//     constructor(thName: string) {
//         this.name = thName;
//     }
// }
//
//
// class Employees extends Person {
//     private department: string;
//
//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
//
// }
//
//
// let howard = new Employees("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name); // error


//Protected contructor
//


class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employees extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employees("Howard", "Sales");


//Read Only Modifier
//
//
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}

let oct = new Octopus("Hello brother");
// oct.name  = "tests";





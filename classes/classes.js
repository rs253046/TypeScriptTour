var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.info('Typescrpit classes');
//Class basic example.
var Greeter = (function () {
    function Greeter(message) {
        console.info('constructor', this);
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.info('Hello ' + this.greeting);
    };
    return Greeter;
}());
var greeter = new Greeter('Classes');
console.info(greeter);
//  Inheritence 
var Animal = (function () {
    function Animal(thName) {
        this.name = thName;
    }
    Animal.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 0; }
        console.log(this.name + " moved " + distanceInMeter + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
        // this.name = name;
    }
    Snake.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 5; }
        console.log("Slithering...");
        // super(distanceInMeter);
        _super.prototype.move.call(this, distanceInMeter);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
// Public, private, and protected modifiers
// Public by default
var Animal1 = (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
var a = new Animal1('hello brother');
a.move(345);
// console.info(a.name;
var AnimalCity = (function () {
    function AnimalCity(theName) {
        this.name = theName;
    }
    return AnimalCity;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
        // console.info(this.name);
    }
    return Rhino;
}(AnimalCity));
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new AnimalCity("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
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
var Person = (function () {
    function Person(theName) {
        this.name = theName;
    }
    return Person;
}());
// Employee can extend Person
var Employees = (function (_super) {
    __extends(Employees, _super);
    function Employees(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employees.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employees;
}(Person));
var howard = new Employees("Howard", "Sales");
//Read Only Modifier
//
//
var Octopus = (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var oct = new Octopus("Hello brother");
// oct.name  = "tests";

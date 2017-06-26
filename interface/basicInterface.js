console.info('Interface');
//Basic Interface
function printLabel(contract) {
    console.info('printrLabel', contract.label);
}
var myObject = {
    mySize: 10,
    label: "I Love my country"
};
printLabel(myObject);
var myObj = {
    mySize: 10,
    label: "Interface Wins"
};
function printlabel2(contract) {
    console.info('Inteface Example', contract.label);
}
printlabel2(myObj);
function printSquare(config) {
    console.info(config.name);
    console.info(config.color);
}
var Objective = {
    color: "Red",
    test: 3
};
printSquare(Objective);
//Example 2
function createSquare(config) {
    var data = {
        color: 'Red',
        area: 234
    };
    if (config.color)
        data.color = config.color;
    if (config.area)
        data.area = config.area;
    return data;
}
var data = createSquare({ color: "Red" });
console.info('data', data);
function tryReadyOnly(config) {
    console.info(config.employeeId);
    // config.employeeId = 123123;
    console.info(config.employeeId);
}
tryReadyOnly({
    employeeId: 234234,
    employeeCode: '2342342'
});
// Read Only Array
var a = [1, 2, 3, 4, 5, 6];
// a.push(4);
var b = a;
console.info(b);
function TestExcess(config) {
    var areaObj = { area: 234 };
    console.info(config.color);
    return areaObj;
}
console.info(TestExcess({ colour: "red", "class": "sdf" }));
function TestExcess1(config) {
    var areaObj = { area: 234 };
    console.info(config.color);
    return areaObj;
}
console.info(TestExcess1({ colour: "red", "class": "sdf", abc: 234243, flag: false }));
var mySearch;
mySearch = function (source, subString) {
    // let result = source.search(subString); 
    // return result > -1;
    return true;
};
var arrayType;
arrayType = ["333,", "fdsg"];
console.info(arrayType["1"]);
var arr = { length: 234, name: 345 };
console.info(arr['length']);
var myArray = ["Alice", "Bob"];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
console.info(digital.tick(), analog.tick());
var squareObj = {};
squareObj.sideLength = 10;
squareObj.color = "blue";
squareObj.penWidth = 123;
console.info('squareObj', squareObj);
function getCounter() {
    var counter = function (start) { };
    console.info('sdf', counter);
    counter.interval = 10;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
console.info(c(10));
console.info(c.reset());
console.info(c.interval = 5.0);

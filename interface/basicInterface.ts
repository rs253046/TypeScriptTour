console.info('Interface');

//Basic Interface

function printLabel(contract: {label: string}) {
   console.info('printrLabel', contract.label);
}
let myObject = {
  mySize: 10,
  label: "I Love my country"	
}

printLabel(myObject);

// Same example with interface


interface PrintlabelObject {
  label: string;
}

let myObj = {
  mySize: 10, 
  label: "Interface Wins"
};

function printlabel2(contract: PrintlabelObject) {
  console.info('Inteface Example',  contract.label);
}

printlabel2(myObj);


//Optional Properties

interface squareConfig {
  width?: number;
  color?: string;
  name?: string;
  area? : number;
}

function printSquare(config: squareConfig) {
  console.info(config.name);
  console.info(config.color);
}

let Objective = {
  color: "Red",
  test: 3
};

printSquare(Objective);

//Example 2

function createSquare(config: squareConfig): {color: string, area: number} {
   const data = { 
     color: 'Red',
     area: 234
   };
  if (config.color)
    data.color = config.color;
  if (config.area)
    data.area = config.area;
  return data;
}

let data: {color: string,area: number} = createSquare({color:"Red"});
console.info('data',  data);

//Read Only Properties


interface ReadOnly {
  readonly employeeId: number;
  readonly employeeCode: string;
}

function tryReadyOnly(config: ReadOnly): void {
	console.info(config.employeeId);
	// config.employeeId = 123123;
	console.info(config.employeeId);
}

tryReadyOnly({
  employeeId: 234234,
  employeeCode: '2342342'
})

// Read Only Array
let a: ReadonlyArray<any> = [1,2,3,4,5,6];
// a.push(4);
let b: any[] = a as any[];
console.info(b);

//Excess Property Checks



interface Test {
  color?: string;
  class?: string;
}

function TestExcess(config: Test): {area: number} {
	let areaObj: {area:number} = {area: 234};
	console.info(config.color);
  
  return areaObj;
}


console.info(TestExcess({colour: "red", class: "sdf"} as Test));

interface Test1 {
  color?: string;
  class?: string;
  [propName: string]: any;
}

function TestExcess1(config: Test1): {area: number} {
	let areaObj: {area:number} = {area: 234};
	console.info(config.color);
  
  return areaObj;
}


console.info(TestExcess1({colour: "red", class: "sdf", abc:234243, flag:false}));


// Function type
interface SearchFunc {
	    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string): boolean {
  // let result = source.search(subString); 
  // return result > -1;
  return true;
 }


// mySearch = function(src, test){
//   return true;
// }
//
// console.info(mySearch("ets", "sdf"));

// Indexable Type


interface StringArray {
  [index: number]: string;
}

let arrayType: StringArray;
arrayType = ["333,", "fdsg"];
console.info(arrayType["1"]);

interface NumberDictionary {
	    [index: string]: number;
	    length: number;    // ok, length is a number
	    name: number;      // error, the type of 'name' is not a subtype of the indexer
}

let arr: NumberDictionary = {length:234, name:345};
console.info(arr['length']);

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!
//

//Interfaces in class

//
// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date);
// }
//
// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//     this.currentTime = d;		
// 	  
//   }
//   constructor(h: number, s: number) { }
// } 
//
//
// interface ClockConst {
//   new (hour: number, minute: number): ClockInterfaces;
// }
//
// interface ClockInterfaces {
// 	    tick();
// }
//
// // class clk implements ClockConst {
// //   dateTime: Date;
// //   setTime(d: Date) {
// //     this.dateTime = d;
// //   }
// // }
//
// function createClock(ctor: ClockConst, hour:number, minute: number): ClockInterfaces {
//   return new ctor (hour, minute);
// }
// console.info(createClock("DigitalClock", 12, 17));
//

interface ClockConstructor {
	    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
	    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
	    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
	    constructor(h: number, m: number) { }
	    tick() {
		            console.log("beep beep");
		        }
}
class AnalogClock implements ClockInterface {
	    constructor(h: number, m: number) { }
	    tick() {
		            console.log("tick tock");
		        }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

console.info(digital.tick(), analog.tick());


//Extending Interface.
//

interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}


let squareObj=<Square>{};
squareObj.sideLength = 10;
squareObj.color= "blue";
squareObj.penWidth = 123;
console.info('squareObj', squareObj);


//Hybrid Types


interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}


function getCounter(): Counter {
	let counter = <Counter> function (start: number) {};
	console.info('sdf',counter);

	counter.interval =10;
	 counter.reset = function () { };
	    return counter;
}

let c = getCounter();
console.info(c(10))
console.info(c.reset());
console.info(c.interval = 5.0);


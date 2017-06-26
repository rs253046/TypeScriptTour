// Boolean type declaration

let test : boolean = true;
console.info(test);


// document.body.innerHTML = test;



//Number type declaration

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


console.info("Number", decimal, hex, binary, octal);

// String type declaration

let names: string = "Rahul Singh";
console.info("String:", names);

//Template string

let fullName: string = `Bob Bobbington`;
let age: number = 37;

let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;


console.info('template string', sentence);


// Array type declaration


let list: number[] = [1,2,3,4,5];
console.info(list);
let stringList: string[] = ["1" , "2", "sd"];
console.info("String Array:", stringList);

let Symbollist:  Array<number> = [6,7,8,9];
console.info(Symbollist);

// Tuples declaration


let x: [string, number];

x = ["string", 3];
console.info("tuple", x);
x = ["a", 3];
console.info(x);

//Enum declaration


enum Color  {test, result, id};
console.info('enum:', Color);

let c:Color = Color.test;
console.info(c)

enum Tv {test = 1, result = 4, id=2};
console.info('valuedEnum', Tv);
let cd: Tv = Tv.test;
console.info(cd);


enum testEnum {Red = 1, Green, Blue}
let colorName: string = testEnum[2];

console.info('testEnum', colorName);



//Any Declaration

let anyBoolean: any = false;
let anyString: any = "string";
let anyNumber: any = 234234;

console.info("Any Type", anyBoolean, anyString, anyNumber);

let notSure: any = 4;

console.info(notSure.toFixed());

let prettySure: Object = 3;
// prettySure.toFixed();
console.info(prettySure);


let Anylist: any[] = [1, true, "free"];

Anylist[1] = 100;
console.info(Anylist);


// Void declaration;


function testQuest(): void {
    console.info('testQuestFunction');	
    return null;
}

console.info(testQuest());

let unusable: void = undefined;
console.info('Void Variable', unusable);


let union: (string | number| boolean)= true;
console.info(union);
let unusabled: string = undefined;



// Never declaration type


// function error(message: string): never {
//  	throw new Error(message);
//
// }
// error('fs')



// Type assertions

let someValue: any = 34563456; 
let lengthValue: number = (<string>someValue).length;
console.info('lengthValue',lengthValue);


let someValues: any = "I love my country"; 
let lengthValues: number = (someValues as string).length;
console.info('lengthValue',lengthValues);

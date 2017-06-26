// Boolean type declaration
var test = true;
console.info(test);
// document.body.innerHTML = test;
//Number type declaration
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.info("Number", decimal, hex, binary, octal);
// String type declaration
var names = "Rahul Singh";
console.info("String:", names);
//Template string
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next month.";
console.info('template string', sentence);
// Array type declaration
var list = [1, 2, 3, 4, 5];
console.info(list);
var stringList = ["1", "2", "sd"];
console.info("String Array:", stringList);
var Symbollist = [6, 7, 8, 9];
console.info(Symbollist);
// Tuples declaration
var x;
x = ["string", 3];
console.info("tuple", x);
x = ["a", 3];
console.info(x);
//Enum declaration
var Color;
(function(Color) {
    Color[Color["test"] = 0] = "test";
    Color[Color["result"] = 1] = "result";
    Color[Color["id"] = 2] = "id";
})(Color || (Color = {}));;
console.info('enum:', Color);
var c = Color.test;
console.info(c);
var Tv;
(function(Tv) {
    Tv[Tv["test"] = 1] = "test";
    Tv[Tv["result"] = 4] = "result";
    Tv[Tv["id"] = 2] = "id";
})(Tv || (Tv = {}));;
console.info('valuedEnum', Tv);
var cd = Tv.test;
console.info(cd);
var testEnum;
(function(testEnum) {
    testEnum[testEnum["Red"] = 1] = "Red";
    testEnum[testEnum["Green"] = 2] = "Green";
    testEnum[testEnum["Blue"] = 3] = "Blue";
})(testEnum || (testEnum = {}));
var colorName = testEnum[2];
console.info('testEnum', colorName);
//Any Declaration
var anyBoolean = false;
var anyString = "string";
var anyNumber = 234234;
console.info("Any Type", anyBoolean, anyString, anyNumber);
var notSure = 4;
console.info(notSure.toFixed());
var prettySure = 3;
// prettySure.toFixed();
console.info(prettySure);
var Anylist = [1, true, "free"];
Anylist[1] = 100;
console.info(Anylist);
// Void declaration;
function testQuest() {
    console.info('testQuestFunction');
    return null;
}
console.info(testQuest());
var unusable = undefined;
console.info('Void Variable', unusable);
var union = true;
console.info(union);
var unusabled = undefined;
// Never declaration type
// function error(message: string): never {
//  	throw new Error(message);
//
// }
// error('fs')
// Type assertions
var someValue = 34563456;
var lengthValue = someValue.length;
console.info('lengthValue', lengthValue);
var someValues = "I love my country";
var lengthValues = someValues.length;
console.info('lengthValue', lengthValues);

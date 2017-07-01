console.info('Enum');
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Right"] = 3] = "Right";
    Direction[Direction["Left"] = 4] = "Left";
})(Direction || (Direction = {}));
console.info(Direction);
var FileExcess;
(function (FileExcess) {
    FileExcess[FileExcess["None"] = 0] = "None";
    FileExcess[FileExcess["Read"] = 2] = "Read";
    FileExcess[FileExcess["Write"] = 0] = "Write";
    FileExcess[FileExcess["ReadyWrite"] = 2] = "ReadyWrite";
    FileExcess[FileExcess["G"] = "123".length] = "G";
})(FileExcess || (FileExcess = {}));
console.info(FileExcess);
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["C"] = 'aasd'.length] = "C";
})(Enum || (Enum = {}));
var a = Enum.A;
console.info(a);
var nameOfA = Enum[Enum.A];
console.info(nameOfA);
console.info(1 /* A */, 4 /* B */);
//Ambient Enum
//
//
//
//
// // declare enum Dec{
//     C =2
//      
// }
// // Enum.B =3;
// // var Dec = {c:3};
// console.info(Dec['C']);

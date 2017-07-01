console.info('Enum');


enum Direction {
    Up = 1,
        Down,
        Right,
        Left
}

console.info(Direction);



enum FileExcess {
    None,
    Read = 1 << 1,
    Write = 1 >> 2,
    ReadyWrite = Read | Write,
    G = "123".length
}
console.info(FileExcess);



enum Enum {
	A,
	C = 'aasd'.length	
}

let a = Enum.A;
console.info(a);

let nameOfA = Enum[Enum.A];

console.info(nameOfA);


const enum test {
    A = 1,
        B = A * 4
}

console.info(test.A, test.B);



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

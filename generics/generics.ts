console.info('Generics');



function identity < T > (arg: T): T {
    return arg;
}


interface genericfunction < T > {
    (arg: T): T;
}

let a: genericfunction < string > = identity;

console.info(a('aisdfasdfasf'));



//generic classes
//
//
//
//

class GenericClass < T > {
    test: T;
    hello: (a: T) => T;
}

let myGn = new GenericClass < string > ();

myGn.test = "test";

myGn.hello = function(x) {
    return x + x
};

console.info(myGn.hello("asd"));


//Generic constraints
//
//
//
//

interface gLength {
    length: number;
}

function logging < T extends gLength > (arg: T): T {
    return arg;
}


console.info(logging([1, 3]));
// console.info(logging(2));
console.info(logging({
    length: 3,
    aa: 12
}));


function getProperties < T, K extends keyof T > (obj: T, key: K) {
    return obj[key];
}


let x = {
    a: 1,
    b: 3,
    c: 4
};

console.info(getProperties(x, "a"));


//Using Class Type in Generic;
//
//

function test1 < T > (c: {
    new(): T;
}): T {
    return new c();
}


class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}
class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}


function createInstance < A extends Animal > (c: new() => A): A {
    return new c();
}


// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!
//

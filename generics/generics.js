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
console.info('Generics');
function identity(arg) {
    return arg;
}
var a = identity;
console.info(a('aisdfasdfasf'));
//generic classes
//
//
//
//
var GenericClass = (function () {
    function GenericClass() {
    }
    return GenericClass;
}());
var myGn = new GenericClass();
myGn.test = "test";
myGn.hello = function (x) {
    return x + x;
};
console.info(myGn.hello("asd"));
function logging(arg) {
    return arg;
}
console.info(logging([1, 3]));
// console.info(logging(2));
console.info(logging({
    length: 3,
    aa: 12
}));
function getProperties(obj, key) {
    return obj[key];
}
var x = {
    a: 1,
    b: 3,
    c: 4
};
console.info(getProperties(x, "a"));
//Using Class Type in Generic;
//
//
function test1(c) {
    return new c();
}
var BeeKeeper = (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!
//

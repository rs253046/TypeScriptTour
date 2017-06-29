console.info('function');
//  Named function
//
//
//
function abc(x, y) {
    return x + y;
}
console.info('Name function', abc(1, 2));
// Anonymous functions
//
//
//
var abcd = function (x, y) {
    return x * y;
};
console.info('Anonymous function', abcd(1, 23));
// Capture variables
//
//
var due = 12;
function abcc() {
    return 12 + due;
}
console.info(abcc());
// Function Types
//
//
//
function add(x, y) {
    return x + y;
}
console.info('add', add(1, 4));
var adidass = function (x, y) {
    return x * y;
};
console.info(adidass(1, 4));
//Full types of a function
//
//
var myAdd = function (a, b) {
    return a + b;
};
console.info(myAdd(5, 6));
// Inferring the type 
//
//
//
var myAdd1 = function (x, y) {
    return x + y;
};
console.info(myAdd1(1, 2));
var myAdd2 = function (x, y) {
    return x * y;
};
console.info(myAdd2(1, 4));
//optional and default parameters
//
//
//
function buildName(firstName, lastName) {
    return firstName + lastName;
}
console.info(buildName('Rahul', 'Swati'));
function buildName2(firstName) {
    return firstName;
}
console.info(buildName2('Rahul'));
// Default parameters
//
//
//
//
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + lastName;
}
console.info(buildName3('Rahul', 'Singh'));
function buildName4(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
}
console.info(buildName4(undefined, 'test'));
// Rest Parameters
//
//
function buildName5(firstName) {
    var restparam = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restparam[_i - 1] = arguments[_i];
    }
    console.info(firstName, restparam);
}
buildName5("firstName", "restparam", "a", "f", "v", "e", "wer");
function buildName6(firstName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return rest;
}
var testName = buildName6;
console.info(testName('1', 'a', 'd'));
// this
//
//
//
//
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.info("card: " + pickedCard.card + " of " + pickedCard.suit);
var deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var car = deck1.createCardPicker();
console.info(car);
var pc = car();
console.info("card: " + pc.card + " of " + pc.suit);
//this in callback
//
//
//
//
//
//
//
// interface uiElement{
//     addClickListener(onclick: (this: void, e: Event) => void): void;
// }
//
//
// class Handler {
//     info: string;
//     onClickGood(this: void, e: Event) {
//         // can't use this here because it's of type void!
//         console.log('clicked!');
//     }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickGood);
//
//
var Handler = (function () {
    function Handler() {
        this.test = function (e) {
            console.info(e);
        };
    }
    return Handler;
}());
var a = new Handler();
console.info('asd', a.test('asd'));
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.info("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.info("card: " + pickedCard2.card + " of " + pickedCard2.suit);
function pickCard3(x) {
    if (typeof x == "object") {
        var pickedCard_2 = Math.floor(Math.random() * x.length);
        return pickedCard_2;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck1 = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard4 = myDeck[pickCard(myDeck1)];
console.info("card: " + pickedCard4.card + " of " + pickedCard4.suit);
var pickedCard5 = pickCard(15);
console.info("card: " + pickedCard5.card + " of " + pickedCard5.suit);

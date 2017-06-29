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
let abcd = function(x, y) {
    return x * y;

}
console.info('Anonymous function', abcd(1, 23));


// Capture variables
//
//

let due = 12;

function abcc() {
    return 12 + due;
}

console.info(abcc());



// Function Types
//
//
//


function add(x: number, y: number): number {
    return x + y;
}

console.info('add', add(1, 4));


let adidass = function(x: number, y: number): number {
    return x * y;
}

console.info(adidass(1, 4));


//Full types of a function
//
//


let myAdd: (x: number, y: number) => number = function(a: number, b: number): number {
    return a + b;
}

console.info(myAdd(5, 6));



// Inferring the type 
//
//
//





let myAdd1 = function(x: number, y: number): number {
    return x + y;
};

console.info(myAdd1(1, 2));


let myAdd2: (a: number, b: number) => number = function(x, y) {
    return x * y;
};

console.info(myAdd2(1, 4));



//optional and default parameters
//
//
//


function buildName(firstName: string, lastName: string) {
    return firstName + lastName;
}



console.info(buildName('Rahul', 'Swati'));



function buildName2(firstName ? : string) {
    return firstName;
}

console.info(buildName2('Rahul'));


// Default parameters
//
//
//
//


function buildName3(firstName: string, lastName: string = "Smith") {
    return firstName + lastName;
}

console.info(buildName3('Rahul', 'Singh'));

function buildName4(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

console.info(buildName4(undefined, 'test'));


// Rest Parameters
//
//


function buildName5(firstName: string, ...restparam: string[]) {
    console.info(firstName, restparam);
}

buildName5("firstName", "restparam", "a", "f", "v", "e", "wer");



function buildName6(firstName: string, ...rest: string[]): string[] {
    return rest;
}

let testName: (a: string, ...b: string[]) => string[] = buildName6;


console.info(testName('1', 'a', 'd'));

// this
//
//
//
//


let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.info("card: " + pickedCard.card + " of " + pickedCard.suit);


// More examples on this
//
//




interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;

}
let deck1: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            };
        }

    }
}

let car = deck1.createCardPicker();

console.info(car);

let pc = car();

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
class Handler {
  info: string;
  test = (e: string) => {
    console.info(e);
  }
}
let a = new Handler();


console.info('asd', a.test('asd'));



let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.info("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.info("card: " + pickedCard2.card + " of " + pickedCard2.suit);




function pickCard3(x: {suit: string; card: number;}[]): number;

function pickCard3(x: number): {suit: string; card: number;};

function pickCard3(x): any{
	    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }

}

let myDeck1 = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard4 = myDeck[pickCard(myDeck1)];
console.info("card: " + pickedCard4.card + " of " + pickedCard4.suit);

let pickedCard5 = pickCard(15);
console.info("card: " + pickedCard5.card + " of " + pickedCard5.suit);

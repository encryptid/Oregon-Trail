// Practice using objects and object notation to group similar types of data together.

// Create two different types of objects: a traveler and a wagon.

// A traveler has a few properties: an amount of food (number), a name (string), and an isHealthy (boolean).

// A wagon has a few properties as well: a passengers list (array) and a capacity (number).

//The following code should work when you are finished:

/**
 * let wagon = makeWagon(5);
let traveler = makeTraveler('Henrietta');
let traveler2 = makeTraveler('Juan');

hunt(traveler); // maybe get more food
eat(traveler2);
eat(traveler2); // juan is hungry
join(wagon, traveler);
join(wagon, traveler2);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon)); // print juan's food + henrietta's food
 */

// Operations

// Write the following functions, which should work on either travelers or wagons. Many of these functions will be 
// short, and some are quite similar to things we've done before (except with objects now). Think about how the objects 
// change how the function needs to work.

// Technical note: if you change an object inside of a function, the changes will affect the original object outside 
// of the function as well. This is not true of primitive data types (strings, numbers, booleans, etc).

// makeTraveler(name)
// Create a new traveler object with the specified name, a random amount of food, and isHealthy = true. This should be 
// very similar to makeCar from today's notes.
function makeTraveler(name) {
    return {
        traveler: name,
        food: Math.floor(Math.random() * 26),
        isHealthy: true,
    };
}

let traveler = makeTraveler('Henrietta');
console.log(traveler);
let traveler2 = makeTraveler('Juan');
console.log(traveler2);

// makeWagon(capacity)
// Create a new wagon with an empty passenger list and the specified capacity. This should be very similar to makeLot 
// from today's notes.
function makeWagon(capacity) {
    return {
        passengers: [],
        wagCap: capacity,
    };
}

let wagon = makeWagon(5);
console.log(wagon);
console.log(wagon.wagCap);
wagon.wagCap

// hunt(traveler)
// 50% chance to increase the traveler's food by 100 (successful hunt), and 50% to increase it by 0 (unsuccessful hunt).
/* ELI5 Directions:
What we need to do here is take a traveler and give them a 50% chance of gaining 100 more of the [1] object array and
a 50% chance of gaining 0.
*/

function hunt(traveler) {
    if (Math.random() >= 0.5) {
        traveler.food = traveler.food + 100;
    return "" + traveler.traveler + " caught a critter! +100 food!";
    } else {
        return "What a waste of time..."   
        };
    }


console.log(hunt(traveler));
console.log(hunt(traveler2));

// eat(traveler)
// Consumes 20 of the traveler's food. If the traveler doesn't have 20 food, the traveler is no longer healthy.

function eat(traveler) {
    if (traveler.food >= 20) {
        traveler.food = traveler.food - 20;
        return "" + traveler.traveler + " has " + traveler.food + " food left."
    } else {
        traveler.isHealthy = false
        return "" + traveler.traveler +  " doesn't feel so good..."
    }
}

console.log (eat(traveler));
console.log (eat(traveler2));

// join(wagon, traveler)
// Add the traveler to the wagon if there is space. If there is not enough capacity, don't add them.
/**
 * steps:
 * 1. create function
 * 2. add parameters (wagon, traveler)
 */
function join(wagon, traveler) { // two parameters
    if (wagon.passengers.length < wagon.wagCap) {
    wagon.passengers.push(traveler);
    return wagon.passengers.length;
    //return traveler.traveler + " has entered the wagon."
    } else {
        return "There isn't enough room for " + traveler.traveler + "."
    }
}
    console.log(wagon.passengers.length);
    join(wagon, traveler2);
    console.log(wagon.passengers.length);
    join(wagon, traveler);
    console.log(wagon.passengers.length);
    join(wagon, traveler);
    console.log(wagon.passengers.length);
    join(wagon, traveler2);
    console.log(wagon.passengers.length);
    join(wagon, traveler)
    console.log(wagon.passengers.length);
    join(wagon, traveler);
    console.log(wagon.passengers.length);
    join(wagon, traveler);
    console.log(wagon.passengers.length);

// quarantine(wagon)
// Return true if there is at least one unhealthy person in the wagon. Return false if not.

function quarantine(wagon) {
    for (let i = 0; i < wagon.passengers.length; i++) {
    if (wagon.passengers[i].isHealthy === true) {
        return true
    } else {
    return false
        }
    }

}

    let status = quarantine(wagon);
    console.log(status);

// Return the total amount of food among all occupants of the wagon.

function foodTotal(wagon) {
    let total = 0;
    for (let i = 0; i < wagon.passengers.length; i++) {
        total = total + wagon.passengers[i].food;
        }
        return total
}

console.log(foodTotal(wagon));

// I DID IT!!!!!!!!! (I think...)

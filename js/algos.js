//  algo practice


////////////////////////////////
// Easy Going
////////////////////////////////
// loop through numbers 1 to 20
    // for ( let i = 0; i <= 20; i ++ ) {
    //     console.log(i);
    // };

////////////////////////////////
// Get Even
////////////////////////////////
// loop through 0 to 200 and list even numbers
// for ( let i = 0; i <= 200; i ++) {
//     if ( i % 2 === 0) {
//         console.log(i);
//     }
// };

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// for (let i = 1; i <= 100; i ++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;
console.log(plantee);
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
console.log(wolfy[3]);
// Give D'Art a second hometown by adding "Hawkins"
dart.push('Hawkins');
console.log(dart);
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.shift();
wolfy.unshift("Gameboy");
console.log(wolfy);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
//
// for (turtles of ninjaTurtles) {
//     console.log(turtles.toUpperCase());
// }


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////

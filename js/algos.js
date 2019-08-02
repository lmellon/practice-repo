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
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
    // plantee[2] = 5001;
    // console.log(plantee);
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
    // wolfy[3] = "Gotham City";
    // console.log(wolfy[3]);
// Give D'Art a second hometown by adding "Hawkins"
    // dart.push('Hawkins');
    // console.log(dart);
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
    // wolfy.shift();
    // wolfy.unshift("Gameboy");
    // console.log(wolfy);
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
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//
// // use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// favMovies.sort();
// // console.log(favMovies);
//
// // Use the method pop
// favMovies.pop();
// // console.log(favMovies);
//
// // push "Guardians of the Galaxy"
// favMovies.push('Guardians of the Galaxy');
// // console.log(favMovies);
//
// // Reverse the array
// favMovies.reverse();
// // console.log(favMovies);
//
// // Use the shift method
// favMovies.shift();
// // console.log(favMovies);
//
// // unshift - what does it return?
// favMovies.unshift();
// // console.log(favMovies);
//
// // splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// // console.log(favMovies.indexOf("Django Unchained"));
// favMovies.splice(14, 1, "Avatar");
// // console.log(favMovies);
//
// // slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// // console.log(favMovies.length); 18
// favMovies.slice(9, 18);
// // console.log(favMovies);
// // store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// let bestMovies = favMovies.slice(9, 18);
// // console.log(bestMovies);
// // console.log your final results
// //
// // After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// // console.log(favMovies.indexOf('Fast and Furious')); 13
// // console.log(bestMovies.indexOf('Fast and Furious'));
////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////

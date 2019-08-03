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
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggbert (hint look at the slice/splice method(s))
// console.log(whereIsWaldo.indexOf('Eggbert'));
// whereIsWaldo.splice(1, 1)
// console.log(whereIsWaldo);

// Change "Neff" to "No One"
// console.log(whereIsWaldo[2]);
//     => [ 'Lucinda', 'Jacc', 'Neff', 'Snoop' ]
// console.log(whereIsWaldo.indexOf('Neff'));
//      => 2
// whereIsWaldo[2][2] = "No One"
// console.log(whereIsWaldo[2]);

// Access and console.log "Waldo"
// console.log(whereIsWaldo[3]);
// => [ 'Petunia', [ 'Baked Goods', 'Waldo' ] ]
// console.log(whereIsWaldo[3][1][1]);
// => Waldo

////////////////////////////////
//  Excited Kitten
////////////////////////////////
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// for ( i = 1; i <= 20; i ++) {
//     console.log("Love me, pet me! HSSSSSS!");
// }

// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// let catTalk = ["human, why are you taking pictures of me?", "the catnip made me do it", "why does the red dot always get away?"]
//
// for ( i = 1; i <= 20; i ++) {
//     if (i % 2 === 0) {
//         let random = Math.floor(Math.random() * 3)
//         console.log(catTalk[random]);
//     } else {
//         console.log("Love me, pet me! HSSSSSS!");
//     }
// }

////////////////////////////////
//  Find the Median
////////////////////////////////
// Find the median number in the following nums array, then console.log that number.
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]
//
// console.log(Math.floor(nums.length / 2));
// => 12
//
// console.log(nums[12]);
// => 19

///////////////////////////////
//  SAVINGS ACCOUNT
//////////////////////////////
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
    // let bank_account = 0
    // for ( i = 1; i <= 10; i ++) {
    //     bank_account += i;
    // }
    // console.log("your account has $" + bank_account);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
    // let pay = 0
    // let bank_account = 0
    // for (let i = 1; i <= 100; i ++) {
    //     pay += i;
    //     bank_account = pay * 2;
    // }
    // console.log('your account has $' + bank_account);

////////////////////////////////
//  Fibonacci
////////////////////////////////
// linear approach
    // const fib = (n) => {
    //     let a = 0;
    //     let b = 1;
    //     // f is the result of adding the two previous numbers.  it is the Fibonacci number
    //     let f = 1;
    //     //loop starts at 2 because since we already have the first and second indexes in 0 and 1
    //         for (let i = 2; i<= n; i ++) {
    //             console.log(a);
    //             f = a + b;
    //             a = b;
    //             b = f;
    //         }
    //     console.log(f);
    //     return f;
    // };
    //
    // console.log(fib(15));

//recursive approach
const fib = (n) => {
    if (n < 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    };
};

console.log(fib(5));

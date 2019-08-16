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
    // const fib = (n) => {
    //     if (n < 2) {
    //         return 1;
    //     } else {
    //         return fib(n - 1) + fib(n - 2);
    //     };
    // };
    //

//////////////////////////
//      Checkerboard
/////////////////////////
// const boardSize = 10;
//
// for (i = 1; i <= 10; i ++) {
//     if (i % 2 === 0) {
//         console.log(" # # # # #");
//     } else {
//         console.log("# # # # # ");
//     }
// }

/////////////////////////////////////
//      multi-demensional arrays
/////////////////////////////////////
const grid = [
             [0, 1, 2],
             [3, 4, 5],
             [6, 7, 8]
            ];

// console.log(grid.join());
// 0,1,2,3,4,5,6,7,8

//////////////////////////////////
//      Print An Array
//////////////////////////////////
//Write a function called printArr that will print the items of an array.
    // SET function to take parameter of arry called input
    // SET variable string to empty
    // LOOP the length of the array
        // ADD each element to string
    // RETURN string

const names = ['sam', 'ed', 'harry'];

const printArr = (input) => {
    let string = "";
    for (let i = 0; i < input.length; i ++) {
        string += `${input[i]} \n`
    };
    return string;
};

// console.log(printArr(names));

//////////////////////////////////
//      Reverse a String
//////////////////////////////////
// Write a function called reverseString that will take a string and return the string reversed.

// DECLARE a function with a parameter for input
// SET an empty variable to contain reversed input
// LOOP through input in reverse order
    // ADD to empty variable
// RETURN new variable

const backwards = (input) => {
    let reversed = ""
    for ( let i = (input.length-1); i >= 0; i --) {
        reversed += input[i];
    }
    return reversed;
};

// console.log(backwards("holla"));

// Second solution
// DECLARE a function that takes a parameter called input
// SET a varaible, reversed, to an empty array
// LOOP through the input in reverse order
    // PUSH into empty array called reversed
// RETURN JOINED elements in reversed

const backwards2 = (input) => {
    let reversed = [];
    for ( let i = (input.length - 1); i >= 0; i -- ) {
        reversed.push(input[i]);
    };
    return reversed.join('');
};

// console.log(backwards2('hello'));

////////////////////////////////////
//      IsPalindrome
///////////////////////////////////
// Write a function called isPalindrome that will return true if a given input (string(s) or number) is a palindrome and false if it's not.

    // DECLARE function that takes a parameter for the input
    // SET new variable, reversed, to an empty string
    // LOOP through input in reverse order
        //  PUSH into reversed
    // IF reversed is equal to input,
        // RETURN true
    // ELSE
        // RETURN false

    const isPalindrome = (input) => {
        let forward = input.join('');
        let reversed = "";
        for (let i = (forward.length-1); i >= 0; i --) {
            reversed += forward[i];
        }
        if (reversed === forward) {
            return true;
        } else {
            return false;
        }
    }

//console.log(isPalindrome('race car'));

///////////////////////////////////////
//      Find The Largest Number
///////////////////////////////////////
// Write a function called largestNumber that will return the largest value from an array.
    // DECLARE function that will take a parameter of an array
    // SET a variable, largest, equal to the parameter's 0 index
    //  FOR EACH element in the array
        // IF index is greater than largest
            // SET largest to that value
    // RETURN largest

    const largestNumber = (arr) => {
        let largest = arr[0];
        arr.forEach((num) => {
            if (num > largest) {
                largest = num
            }
        })
        return largest;
    }
// console.log(largestNumber([1,2,10]));

/////////////////////////////////////////
//      CHESS BOARD
////////////////////////////////////////
// Write a function called chessBoard that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
    // DECLARE function called chessBoard
    // SET variable called size equal to 8
    // SET variable board equal to ''
    // LOOP through while y is less than size
        // LOOP through while x is less than size
            //  IF x + y are even
                // ADD space to board
            // ELSE
                // ADD # to board
        // ADD a new line to board
    // RETURN board

    const chessBoard = () => {
        let size = 8;
        let board = '';
        for (let y = 0; y < size; y ++) {
            for (let x = 0; x < size; x ++) {
                if ((x + y) % 2  === 0) {
                    board += ' ';
                } else {
                    board += '#'
                }
            }
            board += '\n'
        }
        return board
    }
//console.log(chessBoard());

//console.log(Math.round((1.5%0.2 * 100)/100));

var x = 0
var y = 0
var z = 0
x = 1
// console.log(x = (-x + y++) * ++z);
// console.log(-x + y++);
// console.log(-x);

////////////////////////////////
/////       ODDS & EVENS
////////////////////////////////
// Write a function called oddsEvens that given a string, prints its even-indexed and odd-indexed characters as space-separated strings on a single line.

    // DECLARE function that takes a parameter of input
    // SET variable evenStorage as an empty string
    // set variable oddStorage as an empty string
    // LOOP through input
        // IF index is an even number
            // ADD to evenStorage
        // ELSE
            // ADD to oddStorage
    // RETURN evenStorage and oddStorage

    const evenOddSort = (input) => {
        let evenStorage = '';
        let oddStorage = '';
        for (let i = 0; i < input.length; i ++) {
            if (i % 2 === 0) {
                evenStorage += input[i]
            } else {
                oddStorage += input[i]
            }
        }
        // return `${evenStorage} ${oddStorage}`
        return evenStorage + " " + oddStorage
    }

// console.log(evenOddSort('characters'));

///////////////////////////
//      LIKES
///////////////////////////
// Write a function called likes which takes in input array, containing the names of people who like an item. It must return the display text as shown in the examples and is dependent on the number of elements in the array.
//
// Input: likes([])
// Output: "no one likes this"
//
// Input: likes(["Peter"])
// Output: "Peter likes this"
//
// Input: likes(["Jacob", "Alex"])
// Output: "Jacob and Alex like this"
//
// Input: likes(["Max", "John", "Mark"])
// Output: "Max, John and Mark like this"
//
// Input: likes(["Alex", "Jacob", "Mark", "Max"])
// Output: "Alex, Jacob and 2 others like this"

    // DECLARE a function that take a parameter of an array
    // IF array is empty
        // RETURN "no one likes this"
    // ELSE IF array has one element
        // RETURN "element + likes this"
    // ELSE IF array has 2 elements
        //  RETURN "element 1 and element 2 like this"
    // ELSE IF array has 3 elements
        // RETURN "element 1, element 2 and element 3 like this"
    // ELSE IF array has 4 elements,
        // RETURN "element 1, element 2 and 2 others like this"

const whoLikes = (arr) => {
    if (arr.length == 0) {
        return "no one likes this"
    } else if (arr.length == 1) {
        return arr[0] + " likes this."
    } else if (arr.length == 2) {
        return arr[0] + " and " + arr[1] + " like this."
    } else if (arr.length == 3) {
        return arr[0] + ", " + arr[1] + " and " + arr[2] + " like this."
    } else {
        return arr[0] + ", " + arr[1] + " and " + (arr.length - 2) + " others like this."
    }
}

// console.log(whoLikes(["Peter", "Jacob", "Alex", "Max", "Paul"]));

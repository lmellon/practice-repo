const greeting = 'Hello World';
//console.log(greeting);

// // QUESTION 1
// sample = [1,2,0]
// sample2 = [4,1,3,4,2]
// sample3 = [1,2,3,4,4,3,2,1,0]
// const distinctValues = (seed) => {
//     return new Set(seed).size;
// };
//
// //console.log(distinctValues(sample));
// //console.log(distinctValues(sample2));
//
// const distinctValues = (seed) => {
//     let obj = {};
//
//     seed.forEach( num => {
//         if(!obj[num]) {
//             obj[num] = 0;
//         }
//         obj[num] ++;
//     })
//     return Object.keys(obj).length;
// }
//
// distinctValues(sample);

// QUESTION 3

let columnA = [1,2,3,4,5];
let columnB = [1,2,3,4,5,6,7];


const compare = (arr1, arr2) => {
    let integers = {};
    arr1.forEach(num => {
        if(!integers[num]) {
            integers[num] = 0;
        } integers[num] ++;
    });
    arr2.forEach(num => {
        if(!integers[num]) {
            integers[num] = 0;
        } integers[num] ++;
    });
    return (Object.keys(integers).find(key => integers[key] === 1));
}
// compare(columnB, columnA);

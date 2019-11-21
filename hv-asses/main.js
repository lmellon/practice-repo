const greeting = 'Hello World';
//console.log(greeting);

sample = [1,2,0]
sample2 = [4,1,3,4,2]
sample3 = [1,2,3,4,4,3,2,1,0]
// const distinctValues = (seed) => {
//     return new Set(seed).size;
// };

//console.log(distinctValues(sample));
//console.log(distinctValues(sample2));

const distinctValues = (seed) => {
    let obj = {};

    seed.forEach( num => {
        if(!obj[num]) {
            obj[num] = 0;
        }
        obj[num] ++;
    })
    console.log(obj);
    console.log(Object.keys(obj).length);
    return Object.keys(obj).length;
}

distinctValues(sample);

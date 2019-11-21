const greeting = 'Hello World';
//console.log(greeting);

sample = [1,2,0]
sample2 = [4,1,3,4,2]

const distinctValues = (seed) => {
    return new Set(seed).size;
};

console.log(distinctValues(sample));
console.log(distinctValues(sample2));

_.uniq(sample).length;

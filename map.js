const numbers = [4, 6, 8, 10, 12];
const output2 = [];

// function doubleOld(number){
//     return number * 2;
// }
const doubleIt = number => number * 2;

for(const number of numbers){
    result =doubleIt (number);
    output2.push(result);
}
// console.log(output2);

const output =numbers.map(doubleIt);
const output3 =numbers.map(number => number * 2);
const output4 =numbers.map(x => x * 2);

const squares = numbers.map(x => x * x);
console.log(squares);
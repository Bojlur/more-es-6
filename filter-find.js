const numbers = [5, 7, 90, 12, 21, 40, 50, 30];
const bigNumber = numbers.filter(number => number >20);
// console.log(bigNumber);

const products =[
    {name: 'water-bottle', price: 100, color:'green'},
    {name: 'mobile-phone', price: 10000, color:'black'},
    {name: 'smart-watch', price: 3000, color:'black'},
    {name: 'stiky-note', price: 50, color:'meroon'}
];

const expence = products.filter(product => product.price > 100);
// console.log(expence);
const blacks = products.filter(product => product.color =='pink');
// console.log(blacks);

const meroonItem = products.find(product => product.color == 'meroon');
// console.log(meroonItem);

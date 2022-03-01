const friends = [ 'Tom Hank', 'Tom Cruise', 'Tom Solaiman', 'Mr. Braker'];
const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products =[
    {name: 'water-bottle', price: 100, color:'green'},
    {name: 'mobile-phone', price: 10000, color:'black'},
    {name: 'smart-watch', price: 3000, color:'black'},
    {name: 'stiky-note', price: 50, color:'maroon'}
];

const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
products.map(product =>console.log(product));
// console.log(productPrice);
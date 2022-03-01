const fish = {id: 58, name: 'Hilsha', color: 'silver', address: 'chadpur', price: 5000, phone: '0173849238'};

// const phone = fish.phone;
// const price = fish.price;
// const color = fish.color;

const{phone, price, id, color,address} = fish;

// console.log(phone,price, id, address, color);

const company = {
    name: 'GP',
    ceo: {name:'Ajmol', id: 1, food: 'rice'},
    web: {work: 'web development', employee: 22, framwork: 'react'}
};
// const work = company.web.work;
// const food = company.ceo.food;
const{work, framwork} = company.web;
const{food} = company.ceo;
console.log(work, framwork, food);

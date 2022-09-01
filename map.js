//map an array of numbers and multiply each elements by 5

const numbers = [5,10,15,20,25,30];

const fiveTime = numbers.map(x => x*5);
// console.log(fiveTime);

//numbers of array and get odd numbers filter out using arrow function
const oddValues = numbers.filter(x => x%2 != 0);
console.log(oddValues);

//from an array of objects use find to get the ovject with price with 5000

const product = [
    {name: 'phone', price: 4000, color:'white'},
    {name: 'tv', price: 12000, color:'black'},
    {name: 'processor', price: 5000, color:'black'},
    {name: 'router', price: 2000, color:'white'}
];

const findProduct = product.find(x => x.price == 5000);
console.log(findProduct);

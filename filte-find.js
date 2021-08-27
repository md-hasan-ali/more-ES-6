// const numbers = [2, 5, 4, 6, 8, 45, 85, 24, 5, 25];
// const maxValue = numbers.filter(num => num > 10);
// console.log(maxValue);

const products = [
    { name: 'walton', price: 15000, color: 'black' },
    { name: 'samsung', price: 20000, color: 'blue' },
    { name: 'samsung', price: 20000, color: 'blue' }
];

// const black = products.filter(product => product.color == 'black');
// console.log(black);

const blue = products.find(sample =>sample.color == 'blue');
console.log(blue);

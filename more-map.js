// const names = ['hasan ali','Esrafil Hossain','Monir Hossain'];
// const output = names.map(x =>x.length);
// console.log(output);

// const names = ['hasan ali ringku', 'imran ali khan'];
// const output = names.map(x => x.length);
// console.log(output);

const products = [
    { name: 'walton mobile', color: 'red', price: '12000' },
    { name: 'samsung mobile', color: 'black', price: '10000' },
    { name: 'vivo mobile', color: 'yellow', price: '12000' },
    { name: 'xiomi mobile', color: 'golden', price: '15000' }
];

const result = products.map(p => p.name);
const productPrice = products.map(p => p.price);
const ProductOf = products.map(product => product.name);
products.forEach(product =>console.log(product));

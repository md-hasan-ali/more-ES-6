// const fish = {
//     name: 'hilsha',
//     id: 25,
//     ceo: {
//         name: 'abul', id: 11, title: 'khan',
//     },
//     web: {
//         first: 'html', second: 'css', third: 'react',
//     }
// }
// const { name, id, title } = fish.ceo;
// console.log(name, id, title);

const products = {
    name: 'T-shirt',
    color: 'white',
    price: 550,
    id: 110,
    company: {
        name: 'walton',
        id: 20,
        tittle: 'ceo',
        web: {
            first: 'html',
            second: 'css',
            third: 'javaScript',
            framework: 'React',
        }
    }
}
const { first , second } = products.company.web;
console.log(first, second);
const company = {
    name: 'walton',
    id : 12,
    agin: {
        name : 'samsung',
        id : 25,
    }
}
const {name} = company?.agin;
console.log(name);
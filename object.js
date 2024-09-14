

let user = {
    name: 'John Doe',
    age: 30,
    job: 'developer'
}

let user2 = {
    ...user,
    chien: true
}

//console.log(user);

//console.log(user2);


const panier1 = {
    items: ['orange', 'apple', 'banana'],
    prixTotal: 20   
}

const panier2 = { items: ['kiwi', 'mango'], prixTotal: 25}

const panier3 = {
    ...panier1,
    ...panier2
}

//Les clés seront ecrasés lors du merge
console.log(panier3);
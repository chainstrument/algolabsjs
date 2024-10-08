

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
// console.log(panier3);



//for in

const chatsRefuge = {
    siamois: 4,
    persan: 5,
    sphynx: 6,
    radgol: 7,
}



for (chat in chatsRefuge)
{
   // console.log(chat, chatsRefuge[chat]);
}

//enlever la propriété a un objet

const voiture = {
    marque: 'Toyota',
    modele: 'Camry',
    couleur: 'blanc',
    annee: 2020
}

const voitureSansCouleur = ({couleur, ...voitureSansCouleur}) => {
    console.log(couleur)
    return voitureSansCouleur;
}

//console.log(voitureSansCouleur(voiture));

const pays = {
    nom: 'France',
    capitale: 'Paris',
    population: 640000
}

const { nom : sonNom} = pays;

//console.log(nom);

//Additionner les valeurs d'un objet 

const depenses = {
    chauffage: 1000,
    frais: 200,
    internet: 30,
    tv: 50
}

//reduce: prend un 3 eme parameters pour initer la valeur de départ de l'accumulation
const total = Object.values(depenses).reduce((acc, val) => acc + val, 0);

console.log(total)
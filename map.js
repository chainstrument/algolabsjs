let fruits = [ 'a', 'b', 'c', 'd', 'e', 'f'];


fruits.map((fruit) => {
    console.log(fruit);
});


let result = ['20', '30', '40', '50', '60', '70'];

// manipulate map function

res = result.map(el =>  el * el);

res = result.map(el => 'Le nombre est ' + el )

res = result.map((el) => {
    
    console.log('le nb est ' + el);
    return el
})

console.log(res);
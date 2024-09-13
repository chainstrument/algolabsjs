
//Async transforme la fonction en une promesse
let func  = async () => {
    console.log("ok");
    let text = await funcTwo();
 
    return text
}

let funcTwo =   () => { 

    return new Promise((resolve, reject) => {
        setTimeout(() => {
             
            resolve('test');
        }, 500);
    });
}

func().then(text => console.log(text));

// console.log(func());
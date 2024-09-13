
//Async transforme la fonction en une promesse
let func  = async () => {
    console.log("ok");
    let text 
    try {

          text = await funcTwo();
    } catch (err) {
          text = err.message;
    }
 
    return text
}

let funcTwo =   () => { 

    return new Promise((resolve, reject) => {
        setTimeout(() => {
             
            //resolve('test');
            reject(new Error('super error'));
        }, 500);
    });
}

func().then(text => console.log(text));

// console.log(func());
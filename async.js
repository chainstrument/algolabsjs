
 //nouveau scope for await
(async () => {

    let funcTwo =   () => { 

        return new Promise((resolve) => {
            setTimeout(() => {
                 
                resolve('test');
                //reject(new Error('super error'));
            }, 500);
        });
    }
    
    let text = await funcTwo(); 
    console.log(text);
    
})()

 
// console.log(func());




 // suite de fibonacci

 const fibonacciSuite = async () => {
    let fibo = 0;
    let fibo2 = 1;

    for (let i = 0; i < 25; i++) {
        fibo = fibo2 + fibo;
        fibo2 = fibo;
        console.log(fibo);
    }
};

console.log(fibonacciSuite());
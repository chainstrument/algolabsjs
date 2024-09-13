
//test de primalité 

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    let i = 5;
   // console.log("i * i <= n : " +  ' ' + i * i + ' <= ' + n);
    
    while (i * i <= n) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
        i += 6;
    }
    return true;
}

//console.log(isPrime(23));


//Factorielle 

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function factorial2 (n) {
   r = 1;
    while (n> 0){
        r += r * (n - 1);
        n--;
 
    }
    return r;
}

console.log(v(25));




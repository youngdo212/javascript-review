//using for loop
function for_factorial(n){
    var result= n;
    for(var i = n-1; i > 0; i--){
        result *= i;
    }
    return result;
}

//using recursion
function rec_factorial(n){
    if(n===1) return 1;
    return n * rec_factorial(n-1);
}

console.log(for_factorial(5));
console.log(rec_factorial(5));
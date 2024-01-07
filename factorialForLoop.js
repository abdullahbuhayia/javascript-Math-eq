function factorial(n) {
    let factorial = 1;
    for (i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let result = factorial(9)
console.log(result)
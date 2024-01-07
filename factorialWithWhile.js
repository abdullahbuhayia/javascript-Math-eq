function factorial(n) {
    let i = 1;
    let factorial = 1;
    while (i <= n) {
        factorial = factorial * i;
        i++;

    }
    return factorial;
}
let result = factorial(15)
console.log(result)
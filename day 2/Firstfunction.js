let a = process.argv;
let n = parseInt(a[2]);
for (let i = 2; i <= n; i++) {
    let isprime = Isprime(i);
    if (isprime == true) {
        console.log(i);
    }
}
function Isprime(x) {
    let isprime = true;
    for (let div = 2; div * div <= x; div++) {
        if (x % div == 0) {
            isprime = false;
            break;
        }
    }

    return isprime;
}

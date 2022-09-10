let i = process.argv;
let n = parseInt(i[2], 10);


let isprime = true;
for (let div = 2; div * div <= n; div++) {
    if (n % div == 0) {
        isprime = false;
        break;
    }
}
if (isprime == true) {
    console.log(n + " is a prime")
} else {
    console.log(n + " is a not prime")
}
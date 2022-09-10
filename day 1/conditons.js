let i = process.argv;
let n = parseInt(i[2], 10);
if (n % 2 == 0) {
    console.log(n + " is even");
}
else {
    console.log(n + " is odd");
}
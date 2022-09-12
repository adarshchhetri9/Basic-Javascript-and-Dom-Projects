let minimist = require("minimist");
let fs = require("fs");
let parse = minimist(process.argv);
function IsPrime(x) {
    let isprime = true;

    for (let div = 2; div * div <= x; div++)
        if (x % div == 0) {
            isprime = false;
            break;
        }
    return isprime;
}
let t1 = Date.now();
console.log("starting " + t1 % 100000);
let read_text = fs.readFileSync(parse.f1, "utf-8");

let dtext = read_text.toUpperCase();
// console.log(dtext);
// fs.writeFileSync(parse.f2, dtext, "utf-8");
let t2 = Date.now();
console.log("Done at " + t2 % 100000);
console.log(t2 - t1);
let arr = []
for (let i = 2; i <= parse.n; i++) {
    let isprime = IsPrime(i)
    if (isprime == true) {
        arr.push(i);
    }
}
console.log(arr)
let t3 = Date.now();
console.log("finished " + t3 % 100000);
console.log(t3-t2);
console.log(t3-t1);

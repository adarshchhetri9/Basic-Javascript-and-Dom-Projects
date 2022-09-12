function IsPrime(x) {
    let isprime = true;

    for (let div = 2; div * div <= x; div++)
        if (x % div == 0) {
            isprime = false;
            break;
        }
    return isprime;
}
let minimist = require("minimist");
let fs = require("fs");
let parse = minimist(process.argv);

let t1 = Date.now();
console.log("task 1 starting " + t1 % 100000);
fs.readFile(parse.f1, function(data){
    let t2 = Date.now();
    fs.writeFile(parse.f2);
    console.log("task1 finished at " + t2 % 100000);
})


// fs.writeFileSync(parse.f2, data, "utf-8");

let t3 = Date.now(); 
console.log("starting " + t3 % 100000);
let arr = []
for (let i = 2; i <= parse.n; i++) {
    let isprime = IsPrime(i)
    if (isprime == true) {
        arr.push(i);
    }
}
// console.log(arr)

console.log("finished " + t3 % 100000);
// console.log(t3-t2);
console.log(t3-t1);
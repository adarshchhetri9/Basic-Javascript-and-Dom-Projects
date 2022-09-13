function IsPrime(x){
    let isprime = true;
    for( let div = 2; div  < x ; div ++){
    if( x % div == 0){
        isprime = false;
        break;
    }
    }
    return isprime;
}
let minimist = require("minimist");
let fs = require("fs");
let input = minimist(process.argv);

// TASK 1 STARTING AREA
let t1 = Date.now();
console.log("Task 1 start at " + t1 % 100000);
fs.readFile(input.a,function(err,data){
    let t2 = Date.now();
    console.log("Task 1 Finished at "+ t2 % 100000);
    console.log(t2-t1);
});

// task 1 end here 

// task 2 starting area
let t3 = Date.now();
console.log("Task 2 Starting at " + t3 % 100000)
let arr = [];
for ( let i = 0 ; i <= input.n; i++ ){
    let isprime = IsPrime(i)
    if(isprime == true){
        arr.push(i);
    }
}
console.log(arr);
let t4 = Date.now();
console.log("Task 2 Finished at " + t4 % 100000);
console.log(t4-t3)
console.log(t4-t1)


// TERMINAL:
// node .\seecondCallback.js --a=big.data --n=70000
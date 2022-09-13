let minimist = require("minimist");
let input = minimist(process.argv);
let fs = require("fs");
console.log(input.a);
let arr = [];
for (let a = 0 ; a < 50000000 ; a++){
    arr.push(a);
}
let str = arr.join("\n");
fs.writeFileSync(input.a , str , "utf-8" );
fs.appendFileSync(input.a , str , "utf-8" );
fs.appendFileSync(input.a , str , "utf-8" );
fs.appendFileSync(input.a , str , "utf-8" );
let minimist = require("minimist");
let cmd = minimist(process.argv);

let fs = require("fs");//this modules is for reading and writing files
let read = fs.readFileSync(cmd.f1, "utf-8");

let dtext = read.toUpperCase();
console.log(dtext)
fs.writeFileSync(cmd.f2, dtext, "utf-8");

// terminal : node firstFiles.js --f1=f1.txt --f2=f2.txt
// --f1=f1.txt --f2=f2.txt = this is coz of minimist modules
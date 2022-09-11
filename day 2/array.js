let a = process.argv;
let n = parseInt(a[2], 10);
let Array = [];
for (let i = 0; i < n; i++) {
    let val = parseInt(a[i + 3]);// here 3 is given coz we the array in cmd we gave started in position 3 after files name and loop
    Array.push(val);// aur use below line for same stuff
    // Array[i]= val;

}
for (let i = 0; i < Array.length; i++) {
    console.log(Array[i])
}
console.log(Array)//no. that got push array which we gave in terminal
console.log(Array.length)// this line show how many array length 

// terminal things
// node .\array.js 5 10 20 30 40 50
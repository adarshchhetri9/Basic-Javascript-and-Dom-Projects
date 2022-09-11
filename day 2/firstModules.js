// npm install minimist
let a = require("minimist");//reuire le chai minimist lai calaucha 
let NayaModuleKoKam = a(process.argv);
if (NayaModuleKoKam.age > 30) {
    console.log("hello " + NayaModuleKoKam.name + "30 par vais");
} else {
    console.log("hello " + NayaModuleKoKam.name + " aeae 30 kateko chainas teso ni");
}

// minimist is use as -x 10 -y 20 --name=="adarsh" --age==30 for example
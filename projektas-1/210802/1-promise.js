import * as fs from "fs";

console.log("start");
function readFile(name) {
    return new Promise((resolve, reject) => {
        fs.readFile(name, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
}
// let data = "" + await readFile("a.txt");
// console.log(data);
// console.log("finish");
readFile("a.txt").then(data => { 
    console.log("" + data); 
console.log("finish"); });

// nuo 18 minutes kelios minutes ir 1:30:00....
import * as  fs from "fs/promises";
 
let tekstasAll;
try { let tekstas = await fs.readFile("210728/zmones.json");
    tekstasAll += tekstas;
} catch (err) { console.log("nesigavo perskaityti failo");};

console.log(tekstasAll);
//const myArr = JSON.parse(tekstasAll);
//document.getElementById("name").innerHTML = myArr + obj.city + ", " + obj.address;


/*
var arrayPath = './zmones.json';

function fsReadFileSynchToArray (filePath) {
    var data = JSON.parse(fs.readFileSync(filePath));
    console.log(data);
    return data;
}
var test = arr.loadFile(arrayPath);
arrLines = fsReadFileSynchToArray(filePath);
console.log(test);

/*
console.log(tekstasAll);
let data = tekstasAll;  
  function dataAll () {
        for (var i = 0; i < data.length; i++) {
            firstname.push( data[i].firstname );
            address.push( data[i].address );
            city.push( data[i].city );
        }
    }
console.log('resultatas: ' + firstname.length); // result: 3
dataAll();
*/

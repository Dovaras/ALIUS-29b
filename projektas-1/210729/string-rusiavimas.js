
//sukurti 2 JSON failus, kuriuose butu string'u masyvai perskaityti abu failus, suparsinti,
//apjungti i viena masyva surusiuoti masyva pagal string'o ilgi atspausdinti masyva

//surusiuoti pagal stringo ilgi

import * as fs from "fs/promises";
let file1 = "" + await fs.readFile("210729/a.json");
let file2 = "" + await fs.readFile("210729/b.json");

const arr1 = JSON.parse(file1);
const arr2 = JSON.parse(file2);
const arrBoth = arr1.concat(arr2);

arrBoth.sort((e1, e2) => e1.length - e2.length);
console.log(arrBoth);

/*
duomenys += await fs.readFile("b.txt"); 
duomenys += await fs.readFile("c.txt");}​​​​​ catch (err) {
    ​​​ console.log("Klaida skaitant is failo:", err);}
    ​​​​​console.log(duomenys);
*/
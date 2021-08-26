import * as readline from "readline"; 

const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); 

function skaiciausIvedimas(msg) { 
    return new Promise(resolve => { 
        rl.question(msg, val => { 
            resolve(parseInt(val)); 
        }) 
    }) 
} 
let skaicius = await skaiciausIvedimas("Ivesk skaiciu: "); 
function fakt(sk) { 
    if (sk < 0) { 
        throw new Error("neimanoma paskaiciuoti negiamo skaiciaus faktorialo"); } 
    if (sk === 0) { 
        return 1; 
    } 
        return sk * fakt(sk - 1); 
    } 
    try { 
        console.log(fakt(skaicius)); } 
    catch (err) { 
        console.log("Idiote - blogas skaicius: " + err.msg); 
    } 
    console.log("pabaiga"); 
    rl.close();

//210729 1:45:00 apie JSON kazkas
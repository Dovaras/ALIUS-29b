
//Trumpesnis kelias
async function suma(a, b) { 
    return a + b; 
}
let rez = await suma(1, 2) + await suma(4, 5);
console.log(rez + 4); 
console.log("labas");

//Ilgesnis kelias
suma(1, 2).then(v1 => { 
    return new Promise((resolve) => { 
        suma(4, 5).then(v2 => { 
            resolve(v1 + v2); 
        }); 
    }); 
}).then(val => { 
        rez = val;
        console.log(rez + 4);
        console.log("labas"); 
    });


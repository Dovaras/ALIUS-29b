//210804 - 1:55:00-2:15:00 [UNDONE: namu darbo uzduotis]
let nextId = 4;
const zmones = [
    {
        id: 1,
        vardas: "Jonas",
        pavarde: "Jonaitis",
        gimimoData: new Date(1999, 7, 4),
        alga: 5000.01
    },
    {
        id: 2,
        vardas: "Petras",
        pavarde: "Petraitis",
        gimimoData: new Date(1985, 1, 3), // gimimoData: "1985, 1, 3"
        alga: 938.51
    },
    {
        id: 3,
        vardas: "Antanas",
        pavarde: "Antanaitis",
        gimimoData: new Date(1940, 11, 11),
        alga: 438.51
    }
];

function getZmones() {
    return zmones.slice(0);
}

/*
    {
        vardas: "Petras",
        pavarde: "Petraitis",
        gimimoData: "1985-12-31",
        alga: 938.51
    }
*/

function addZmogus(zmogus) {
// Suveike vardas savo vietoj besas, belieka suzvejoti mygtukus...
    console.log("----vykdo addZmogus----");

    if (typeof zmogus !== "object") {
        return;
    }
    if (typeof zmogus.vardas !== "string") {
        return;
    }
    console.log(zmogus.vardas);
    
    if (typeof zmogus.pavarde !== "string") {
        return;
    }
    console.log(zmogus.pavarde);
    // 2021-08-25
    if (typeof zmogus.gimimoData === "string") {
        let dateTest = new Date(zmogus.gimimoData);
        if (isNaN(dateTest.getTime())) {
            return;
        }
    } else if (!(zmogus.gimimoData instanceof Date)) {
        return;
    }
    console.log(zmogus.gimimoData);

    if (typeof zmogus.alga !== "number") {
//        console.log(typeof zmogus.alga);  typeof vejai...
        return;
    }
//    console.log(typeof zmogus.alga);
    console.log(zmogus.alga);

    zmogus = Object.apply({}, zmogus, {id: nextId++});
    if (typeof zmogus.gimimoData === "string") {
        zmogus.gimimoData = new Date(zmogus.gimimoData);
    }
    zmones.push(zmogus);
    console.log("----ivykde addZmogus----");
}

function deleteZmogus(id) {
    const index = zmones.find(z => z.id === id);
    if (index >= 0) {
        zmones.splice(index, 1);
    }
}

function getZmogus(id) {
    const index = zmones.find(z => z.id === id);
    if (index >= 0) {
        return zmones[index];
    }
}

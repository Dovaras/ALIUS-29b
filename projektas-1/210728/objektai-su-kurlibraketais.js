let vardas = "Jonas";
let pavarde = "Jonaitis";
let zmogus = { vardas, pavarde, gimimoMetai: 1999, 
    pasisveikinimas(kalba) {
        if (kalba === "en") { 
            console.log("Hello", this.vardas, this.pavarde); }
        else { console.log("Labas", this.vardas, this.pavarde); }
    }
};
console.log(zmogus);
zmogus.pasisveikinimas("en");
zmogus.pasisveikinimas("jp");
labutis (vardas, pavarde);
function labutis (vardas, pavarde){ 
  console.log("Labinuosi as labas su", vardas, pavarde);
}


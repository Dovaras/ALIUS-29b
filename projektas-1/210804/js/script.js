function parodytiZmones() {
    let str = "<ul>";
    for (const zmogus of getZmones()) {
        str += "<li>" + zmogus.vardas + " " + zmogus.pavarde + "</li>";
    } str += "</ul>";
    document.getElementById("sarasas").innerHTML = str;
}

function buttonClick() {
    const zmogus = ({
        vardas: document.getElementById("vardas").value, 
        pavarde: document.getElementById("pavarde").value,
        gimimoData: document.getElementById("data").value,
        alga: document.getElementById("alga").value
    });
    addZmogus(zmogus);
}
document.querySelector('button').addEventListener('click', buttonClick);
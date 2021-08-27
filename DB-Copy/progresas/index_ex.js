import mysql from "mysql";

const conn = mysql.createConnection({
    host: "localhost",
    user: "nodejs",
    password: "nodejs123456",
    database: "zmones",
});

function dbConnect() {
    return new Promise((resolve, reject) => {
        conn.connect(err => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        })
    })
}

function dbDisconnect() {
    return new Promise((resolve, reject) => {
        conn.end((err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        })
    })
}

function dbQuery() {
    return new Promise((resolve, reject) => {
        conn.query(...arguments, (err, results, fields) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                results,
                fields,
            })
        })
    })
}

try {
    await dbConnect();
    let r = await dbQuery("select * from zmones");
    
    let text = "";
    for (const col of r.fields) {
        text += col.name + "\t";
    }    
    console.log(text);
    for (const row of r.results) {
        text = "";
        for (const col of r.fields) {
            text += row[col.name] + "\t";
        }
        console.log(text);
    }
}
catch (err) {
    console.log("Klaida: ", err);
}
finally {
    try {
        await dbDisconnect();
    } catch(err) {
        // ignored
    }
    console.log("atsijungiau");
}
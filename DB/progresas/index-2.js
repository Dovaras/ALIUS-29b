/*
meniu:

1. zmoniu sarasas
2. prideti zmogu
3. pakeisti zmogaus info
4. istrinti zmogu
0. baigti

1. is DB gauti visa zmoniu sarasa ir atspausdinti i ekrana
2.
    paklausti vardo, pavardes ir algos
    irasyti nauja irasa i zmoniu lentele
3. 
    paklausti id,
    paklausti vardo, pavardes ir algos
    pakeisti irasa zmoniu lenteleje su nurodytu id
4. 
    paklausti id,
    is zmoniu lenteles istrinti irasa su nurodytu id
0. baigti darba

*/

import readline from "readline";
import mysql from "mysql";
import {
  exit
} from "process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inputText(msg) {
  return new Promise((resolve) => {
    rl.question(msg, (text) => {
      resolve(text);
    });
  });
}

const conn = mysql.createConnection({
  host: "localhost",
  user: "nodejs",
  password: "nodejs123456",
  database: "zmones",
  multipleStatements: true,
});

function dbConnect() {
  return new Promise((resolve, reject) => {
    conn.connect((err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

function dbDisconnect() {
  return new Promise((resolve, reject) => {
    conn.end((err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
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
      });
    });
  });
}

function printTable(r) {
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

console.log("1. zmoniu sarasas\r\n" + "2. prideti zmogu\r\n" +
  "3. pakeisti zmogaus info\r\n" + "4. istrinti zmogu\r\n" + "0. baigti\r\n");
let meniu;
do {
  meniu = parseInt(await inputText("Ivesk komanda: "));
  // rl.question('Ivesk komanda: ', response => {
  //       meniu = parseInt(response)
  // });
  switch (meniu) {
    case 0:
      exit();
    case 1:
      dbConnect();
      printTable(dbQuery("select * from zmones"));
      console.log("11111111111111111111111111111111111");
      break;
    case 2:
      console.log("2222222222222222222222222222222222222");
      break;
    case 3:
      console.log("33333333333333333333333333333333333");
      break;
    case 4:
      console.log("44444444444444444444444444444444444444");
      break;
  }
} while (meniu != 0)
rl.close();

// let vardas = await inputText("Kitas vardas: ");
// let pavarde = await inputText("Kita pavarde: ");
// let alga = parseFloat(await inputText("Kokia bus alga? "));
// let id = parseInt(await inputText("Koks id: "));

// await dbQuery(
//   `insert into zmones (vardas = ?, pavarde = ?, gim_data = ?, alga = ?, id = ?)
//   values (vardas, pavarde, alga, gim_data, id)`,
//[vardas, pavarde, alga, new Date(), id]
//);
// await dbQuery(
//   `update zmones set vardas = ?, pavarde = ?, alga = ?, gim_data = ? where id = ?`,
//   [vardas, pavarde, alga, new Date(), id]
// );
try {
  r = await dbQuery(`
        select vardas, pavarde, alga, gim_data, id
        from zmones order by vardas, pavarde
        `); //left join kontaktai on zmones.id = kontaktai.zmones_id
  printTable(r);
} catch (err) {
  console.log("Klaida: ", err);
} finally {
  try {
    await dbDisconnect();
  } catch (err) {
    // ignored
  }
}
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
      resolve(conn);
    });
  });
}

function dbDisconnect(conn) {
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

function dbQuery(conn, ...args) {
  return new Promise((resolve, reject) => {
    conn.query(...args, (err, results, fields) => {
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

try {
  //   await dbQuery(
  //     "insert into zmones(vardas, pavarde) values ('vardenis', 'pavardenis')",
  //   );

  let meniu;
  do {
    console.log("1. zmoniu sarasas\r\n" + "2. prideti zmogu\r\n" +
    "3. pakeisti zmogaus info\r\n" + "4. istrinti zmogu\r\n" + "0. baigti\r\n");
  
    switch (meniu = parseInt(await inputText("Ivesk komanda: "))) {
      case 0:
        break;
      case 1:
        await dbConnect();
        printTable(await dbQuery("select * from zmones"));
        console.log("------------------------------------------------");
        break;
      case 2:
        let vardas = await inputText("Vardas: ");
        let pavarde = await inputText("Pavarde: ");
        let alga = parseFloat(await inputText("Kokia bus alga?: "));
        let gim_data = await inputText("Gimimo data?: ");
        let id = parseInt(await inputText("Koks yra id: "));
        await dbQuery(
          `insert into zmones vardas = ?, pavarde = ?, alga = ?, gim_data = ? where id = ?`,
          [vardas, pavarde, alga, gim_data, id]
        );
        console.log("--------------------------------");
        break;
      case 3:
        vardas = await inputText("Vardas: ");
        pavarde = await inputText("Pavarde: ");
        alga = parseFloat(await inputText("Kokia bus alga?: "));
        gim_data = await inputText("Gimimo data?: ");
        id = parseInt(await inputText("Koks yra id: "));
        await dbQuery(
          `update zmones set vardas = ?, pavarde = ?, alga = ?, gim_data = ? where id = ?`,
          [vardas, pavarde, alga, gim_data, id]
        );
        break;
      case 4:
        let id_d = parseInt(await inputText("Koks yra id: "));
        await dbQuery(`DELETE FROM zmones WHERE id = ?`, [id_d]);
        console.log("-----------------------------");
        break;
    }
  } while (meniu != 0)

  // r = await dbQuery(`
  // select vardas, pavarde, tipas, reiksme
  // from zmones left join kontaktai on zmones.id = kontaktai.zmones_id
  // order by vardas, pavarde
  // `);
  // printTable(r);
} catch (err) {
  console.log("Klaida: ", err);
} finally {
  try {
    await dbDisconnect();
  } catch (err) {
    // ignored
  }
  rl.close();
}

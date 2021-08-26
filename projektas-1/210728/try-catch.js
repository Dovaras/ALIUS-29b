import * as fs from "fs/promises";
try { let tekstas = await fs.readFile("210728/a.txt");
console.log("" + tekstas);
} catch (err) { console.log("klaida", err); }


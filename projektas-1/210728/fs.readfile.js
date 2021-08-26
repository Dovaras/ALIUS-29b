class Puodukas {
    constructor() {
      this.spalva = "baltas";
      this.turis = 150;
      this.kiekis = 0;
    }
  }
export {Puodukas};
/*
module.exports = {
  Puodukas
}
*/
import * as fs from "fs/promises";
try{ let tekstas = await fs.readFile("210728/a.txt");
    console.log("" + tekstas);
}
  catch(err) { console.log("nesigavo perskaityti failo");};

/*
import {servisas as Indas} from "./Puodukas.js"

const failas = require("./Puodukas.js");
const {Puodukas} = require("./Puodukas.js");
*/
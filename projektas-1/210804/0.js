// http://localhost:3000/suma?pirmas=5.45&antras=48.231

import { default as express } from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/labas", (req, res) => {
    res.send("<html><body><h1>Labas pasauli!</h1></body></html>");
});
app.get("/style.css", (req, res) => {
    res.send(`.zydras { background-color: aqua;} `);
});
app.get("/index.html", (req, res) => {
    res.send(` <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> <link rel="stylesheet" href="./css/style.css"> </head> <body class="zydras"> zydrasis ekranas  </body> </html> `);
});
app.get("/viso", (req, res) => {
    res.send("Viso geriausio pasauli!");
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
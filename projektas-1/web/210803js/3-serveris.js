//210802/2-serveriai.js

import { Server } from "net";
import * as fs from "fs/promises";
import * as path from "path";

const WEB_DIR = "web";

let server = new Server((socket) => {
    socket.setEncoding("utf-8");
    let allData = "";
    socket.on("data", async (data) => {
        allData += data;
        let lines = allData.split("\r\n");
        if (lines.findIndex(e => e === "") !== -1) {
            let fileName = lines[0].split(" ")[1];
            let realFile = path.join(WEB_DIR, fileName);
            console.log(realFile);
            let resp;
            try {
                resp = "HTTP/1.1 200 Ok\r\n\r\n";
                let html = await fs.readFile(realFile, {
                    encoding: "utf-8"
                });
                resp += html;
            } catch (err) {
                resp = "HTTP/1.1 404 Not Found\r\n\r\n";
            }
            socket.write(resp + "\r\n\r\n", () => {
                socket.end();
            });
        }
    });
});

server.listen(3000);
// nuo 0:50:00
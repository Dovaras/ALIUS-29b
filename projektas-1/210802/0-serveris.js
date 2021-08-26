import { Server } from "net";

let server = new Server(socket => {
    console.log("kazkas prisijunge");
    console.log(
        socket.localAddress,
        socket.localPort,
        socket.remoteAddress,
        socket.remotePort);

    socket.end();
});

server.listen(3000); // iki 45:00
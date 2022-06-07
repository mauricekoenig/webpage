

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public/js"));
app.use(express.static(__dirname + "/public/css"));

app.get("/", (req, res) => {
    res.sendFile(path("chat.html"));
});

app.get("/client.js", (req, res) => {
    res.sendFile("client.js");
});

const server = app.listen(port, () => {
    console.log("Listening: " + port);
});

const socket = require("socket.io");
const io = socket(server);

io.on("connect", (socket) => {
    socket.on("new-message", (msg) => {
        io.emit("new-message", msg); 
    });
});


function path (fileName) {
    return __dirname + "/public/" + fileName;
}
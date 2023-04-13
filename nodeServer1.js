var express = require("express");
var app = express();

const SERVER_PORT = 5001;

app.listen(SERVER_PORT, () => {
    console.log("Server running at http://127.0.0.1:"+SERVER_PORT);
});

app.get("/", (request, response) => {
    var date = new Date();
    var htmlFile = "/html/introServerOne.html";
    console.log("Starting server 1 "+date);    
    response.sendFile(__dirname + htmlFile);    
});


const express=require('express');
const server = express();

// require('./secret.js');

server.listen(process.env.PORT || 3000)

server.get("/", (req, res) => {
    res.send("Hello" + " " + process.env.secretName)
})
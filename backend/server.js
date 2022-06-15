const express = require("express");
const serveStatic = require("serve-static");
const app = require("./controller/app.js");

var port = process.env.PORT || '3001';

app.use(serveStatic(__dirname));

app.listen(port, () => {
    console.log(`Backend Server is running at port: ${port} - http://localhost:${port}`);
});

const serveStatic = require("serve-static");
const app = require("./controller/app.js");
const initSocket = require("./socket.js");

var port = process.env.PORT || '3001';

app.use(serveStatic(__dirname));

const server = app.listen(port, () => {
    console.log(`Backend Server is running at port: ${port} - http://localhost:${port}`);
});

initSocket(server);
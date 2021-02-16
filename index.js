const connect = require("connect");
const app = connect();
app.listen(3000);
app.use("/index.html", index);

function index(req, res, next) {
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Bem vindo!</h1>");
}

console.log("Servidor escutando em http://localhost:3000");
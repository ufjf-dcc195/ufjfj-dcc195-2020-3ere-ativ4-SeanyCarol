const connect = require("connect");
const app = connect();
app.listen(3000);
app.use("/index.html", index);
app.use("/sobre.html", sobre);

function index(req, res, next) {
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Bem vindo!</h1>");
}

function sobre(req, res, next) {
    res.setHeader("Content-type", "text/html");
    res.end(` 
    <label>nome completo: Seany Caroliny Oliveira Silva</label></br>
    <label>curso: Ciência da Computação</label></br>
    <label>email de contato: seany.caroliny@estudante.ufjf.br</label> </br>
    <label>foto de perfil: </label> <img src="url" alt="foto de perfil">   
    `);
}

console.log("Servidor escutando em http://localhost:3000");
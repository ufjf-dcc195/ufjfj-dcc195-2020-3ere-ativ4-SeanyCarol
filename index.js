const connect = require("connect");
const serveStatic = require("serve-static");

const app = connect();
app.listen(3000);
app.use(serveStatic("./public"));
app.use(static);
app.use("/index.html", index);
app.use("/sobre.html", sobre);

function static(req, res, next) {
    res.setHeader("Content-type", "text/html");
    res.write("<link rel=stylesheet href=estilo.css />")
    next();
}

function index(req, res, next) {
    res.end("<h1>Bem vindo!</h1>");
}

function sobre(req, res, next) {
    res.end(` 
    <img src="fotoPerfil.jpg" alt="foto de perfil">  
    <div class="label">
        <label>nome completo: Seany Caroliny Oliveira Silva</label></br>
        <label>curso: Ciência da Computação</label></br>
        <label>email de contato: seany.caroliny@estudante.ufjf.br</label>
    </div>
    `);
}

console.log("Servidor escutando em http://localhost:3000");
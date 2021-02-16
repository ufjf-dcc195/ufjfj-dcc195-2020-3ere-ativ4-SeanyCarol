const connect = require("connect");
const serveStatic = require("serve-static");
const morgan = require("morgan");
const PORT = process.env.PORT ?? 3000;

const app = connect();
app.listen(PORT);
app.use(logger);
app.use(morgan("combined"));
app.use(serveStatic("./public"));
app.use(static);
app.use("/index.html", index);
app.use("/sobre.html", sobre);
app.use("/techs.html", techs);

function static(req, res, next) {
    res.setHeader("Content-type", "text/html");
    res.write("<link rel=stylesheet href=estilo.css />")
    next();
}

function index(req, res, next) {
    res.end(`<h1>Bem vindo!</h1>
    <a href="/sobre.html">Sobre</a> </br>
    <a href="/techs.html">Tecnologias</a> 
    `);
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

function techs(req, res, next) {
    let tecnologias = ['C', 'C++', 'Java', 'JavaScript', 'Python', 'Node.js', 'SQL', 'PostgreSQL', 'Insomnia', 'Intellij Idea', 'Visual Studio Code', 'NetBeans', 'Code Blocks', 'Spyder', 'BlueJ', 'Spring Boot', 'React', 'Bootstrap', 'Entre outras'];
    res.end(`
    <h1>Tecnologias já utilizadas</h1>
    <ul> 
        ${tecnologias.map(function(tecnologia, index){
           return `<li id=${index}>${tecnologia}</li>`;
        }).join("\n")}  
    </ul>`
    );
}

function logger(req, res, next) {
    console.log(`Nova requisição!!\n`, req.url);
    next();
}

console.log(`Servidor escutando em http://localhost:${PORT}`);
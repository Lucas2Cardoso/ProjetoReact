const data = require("./db.js");

const Jsonserver = require("json-server");
const server = Jsonserver.create();
const router = Jsonserver.router(data);
const middlewares = Jsonserver.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

// CRUD -> Create, Read, Update, Delete

// Retorna um serviço

server.get('/Medicamentos/:index', (req, res) => {
    const { index } = req.params

    return res.json(data.Medicamentos[index])
});

// Retornar todos os serviços

server.get('/Medicamentos', (req, res) => {

    return res.json(data.Medicamentos)
});

// Criar um novo serviço

server.post('/Medicamentos', (req, res) => {
    const { name } = req.body;
    data.Medicamentos.push(name);

    return res.json(data.Medicamentos);
});

// Atualizar um serviço

server.put('/Medicamentos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    data.servicos[index] = name;

    return res.json(data.Medicamentos);
});

// Deletar um item

server.delete('/Medicamentos/:index', (req, res) => {
    const { index } = req.params;

    data.splice(index, 1);
    return res.json({ message: "O item foi deletado" });
})

server.delete("/Medicamentos/:index", (req, res) => {
    const item = item.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Item não foi apagada com sucesso!"
        });
        return res.json({
            error: false,
            message: "Artigo apagado com sucesso!"
        });
    });
});


server.listen(port, () => {
    console.log(`Server is running in http://localhost:${port} `);
});
import express from 'express'

// MOCK
const posts=[
    {
        descricao: "foto teste",
        imagem : "https://placecats.com/millie/300/150",

    },
    {
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Cachorro correndo na praia",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Criança sorrindo",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Comida caseira",
        imagem: "https://placecats.com/millie/300/150"
    }
];



const app = express();
app.use(express.json());

// 3000 é uma porta do servidor 
app.listen(3000, () => {
    console.log("Servidor Escutando");
});

// req = requisição res = resposta
app.get("/posts", (req, res)=> {
    res.status(200).json(posts);
});

 import express from "express";
 
 const posts = [
    {
        id:1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id:2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://source.unsplash.com/random" // Gera uma imagem aleatória
    },
    {
        id:3,
        descricao: "Cachorro brincando no parque",
        imagem: "https://picsum.photos/id/237/200/300"
    },
    {
        id:4,
        descricao: "Comida deliciosa",
        imagem: "https://unsplash.com/photos/food" // Busca uma imagem aleatória de comida
    },
    {
        id:5,
        descricao: "Viagem incrível",
        imagem: "https://unsplash.com/s/travel" // Busca uma imagem aleatória de viagem
    }
]; 
 const app = express();
 app.use(express.json());
 app.listen(3000, ()=> {
    console.log("servidor escutando ...");
 });

 app.get("/api", (req,res) => {
    res.status(200).send("Bem vindo a imerssão");
 });
 app.get("/posts", (req,res) => {
    res.status(200).json(posts);
 });

function buscarPostPorId(id){
    return posts.findIndex((post) =>{
        return post.id === Number(id);
    });
}
 
 app.get("/posts/:id", (req,res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
 });
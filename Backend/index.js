const express = require('express')
const cors = require('cors')
const { postsModel } = require('./models/posts.model')
const app = express()

app.use(express.json())
app.use(cors())

app.listen(3000, console.log("¡Servidor encendido!"))

app.get("/posts", async (req, res) => {
   try {
    const posts = await postsModel.findAll();
    return res.json(posts);
   } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error"});
   }
})

app.post("/posts", async (req, res) =>{
    const{titulo, url, descripcion} = req.body;
    const newPosts = {
        titulo,
        img:url,
        descripcion
    };
    try {
        const posts = await postsModel.create(newPosts);
        return res.json(posts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
        }
});
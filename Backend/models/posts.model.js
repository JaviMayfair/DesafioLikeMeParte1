const { pool } = require("../database/connection")

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
};

const create  = async (posts) => {
    const query = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
    const {rows} = await pool.query(query, [posts.titulo, posts.img, posts.descripcion, 0]);
    return rows[0];
};

module.exports.postsModel = {
    findAll,
    create
};


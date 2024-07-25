const express = require('express');

const dotenv = require("dotenv").config();

const connectDB = require("./connector/database")

const port = process.env.PORT;

const router = require("./router/task-router");

connectDB();

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use("/api/task", require("./router/task-router"));

app.listen(port, () =>{
    console.log("Servidor iniciado...");
})
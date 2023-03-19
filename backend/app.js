
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const { config } = require("dotenv");
var cookieParser = require('cookie-parser')
const app = express();


dotenv.config({path: "./config.env"});
require("./db/conn");
app.use(express.json());
app.use(cookieParser())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

app.use(require("./router/auth"));

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`"Server is listening at port number ${PORT}`);
})


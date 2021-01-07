require('dotenv').config()
const express = require("express")
const app = express();
const connectDB = require("./DB/Connection")
const bodyParser = require("body-parser");
connectDB();

app.use(bodyParser.json());

app.use('/api/userModel', require("./Api/User"));
const Port = process.env.Port || 8080;

app.listen(Port, ()=> console.log("Server Running..."))

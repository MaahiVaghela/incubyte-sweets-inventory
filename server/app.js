const express = require('express');
const app = express();
const mongosse = require('mongoose');
const cors = require('cors');
require("dotenv").config();
require("./models/mongo.js");
//const sweets = require("./routes/sweets.js");
const Addsweets = require("./routes/sweetsAdd.js");
const ListOfsweets = require("./routes/sweetsList.js");
app.use(express.json());
app.use(cors({
    origin: "*", 
    credentials: true
}));
app.use("/", ListOfsweets);
app.use("/add", Addsweets);

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});

module.exports = app;


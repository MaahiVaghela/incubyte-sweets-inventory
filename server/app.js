const express = require('express');
const app = express();
const mongosse = require('mongoose');
require("dotenv").config();
require("./models/mongo.js");
const sweets = require("./routes/sweets.js");

app.use("/", sweets);

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});

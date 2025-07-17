const express = require("express");
const router = express.Router();
//for testing purpose
const sweetsDB = require("../models/sweetsDB.js");


router.get("/", async (req,res)=>{
    let alllistings = await sweetsDB.find({});
     res.send("hello from sweets.js");
});
module.exports = router;
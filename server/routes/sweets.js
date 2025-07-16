const express = require("express");
const router = express.Router();
//const ExpressError = require("../ExpressError.js");
//const {sweetsSchema} = require("../schema.js");
const sweetsDB = require("../models/sweetsDB.js");
// function wrapAsync(fn){
//     return function(req, res, next){
//         fn(req, res, next).catch((err)=>next(err));
//     };
// }
// const validateListing = (req, res, next) =>{
//     let {error} = listingSchema.validate(req.body);
//     if(error){
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }
//     else{
//         next();
//     }
// };

router.get("/", async (req,res)=>{
    let alllistings = await sweetsDB.find({});
    res.render("listing/index.ejs",{alllistings})
    //res.send("hello from sweets.js");
});
module.exports = router;
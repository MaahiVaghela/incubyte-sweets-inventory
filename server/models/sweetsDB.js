const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;
let sweetsSchema = new mongoose.Schema({
   
    sweetId: {
    type: Number,
    unique: true,      
    required: true
  },
    name: {
      type:String,
      required: true,
      unique: true
    },
    
    description : String,

    image: {
       data: Buffer,
       contentType: String
   },

    price: Number,
        
   quantity: {
    type:Number,
    min: 1
   },

   category: String,
});


const SweetsDB = mongoose.model("SweetsDB", sweetsSchema, "sweetsdbs");
module.exports= SweetsDB;


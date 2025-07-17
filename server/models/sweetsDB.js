const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;
let sweetsSchema = new mongoose.Schema({
   
    sweetId: {
    type: Number,
    unique: true,      
    required: true
  },
    name: String,
    
    description : String,

    image: {
       data: Buffer,
       contentType: String
   },

    price: Number,
        
   quantity: Number,

   category: String,
});


// async function main() {
//    await mongoose.connect(mongoURL);
// }
// main()
// .then(()=>{
//     console.log("connected");
// })
// .catch((err)=>{
//     console.log(err);
// });

const SweetsDB =  mongoose.model("SweetsDB",sweetsSchema);
module.exports= SweetsDB;
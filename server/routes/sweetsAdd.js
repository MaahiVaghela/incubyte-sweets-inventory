
const express = require("express");
const multer = require("multer");
const Sweets = require("../models/sweetsDB.js");

const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
    res.json({ message: "Costumersignup API is working!" });
});

//for storing sweets details to db from form
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description, price, quantity, category } = req.body;

    if (!name || !description || !price || !quantity || !category) {
      return res.status(400).json({ message: "All fields are required." });
    }

  
    if (!req.file) {
      return res.status(400).json({ message: "Image is required." });
    }

    const totalSweets = await Sweets.countDocuments();
    const sweetId = 1000 + totalSweets;

    let sweet = await Sweets.findOne({ sweetId});
    if (sweet) {
      console.log("already exist");
      return res.status(400).json({ message: "Sweet already exists" });
    }

    sweet = new Sweets({
      sweetId,
      name,
      description,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      price,
      quantity,
      category,
    });

    await sweet.save();
    res.status(201).json({
  message: "Sweet added successfully!",
  name: sweet.name,
  price: sweet.price,
  quantity: sweet.quantity,
  category: sweet.category,
  sweetId: sweet.sweetId,
});

  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;
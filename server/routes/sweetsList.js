const express = require('express');
const router = express.Router();
const Sweets = require('../models/sweetsDB'); // Adjust path if needed

// GET all sweets
router.get('/', async (req, res) => {
  try {
    const sweets = await Sweets.find();

    const sweetsWithImage = sweets.map((sweet) => {
      return {
        sweetId: sweet.sweetId,
        name: sweet.name,
        price: sweet.price,
        quantity: sweet.quantity,
        category: sweet.category,
        description: sweet.description,
        isAvailable: sweet.quantity > 0,
        image: sweet.image?.data
          ? `data:${sweet.image.contentType};base64,${sweet.image.data.toString('base64')}`
          : null,
      };
    });
      console.log("Fetched sweets from DB:", sweets);
    res.status(200).json(sweetsWithImage);
  

  } catch (error) {
    console.error('Error fetching sweets:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;


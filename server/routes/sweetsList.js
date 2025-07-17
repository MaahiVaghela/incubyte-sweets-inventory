

const express = require('express');
const router = express.Router();
const Sweets = require('../models/sweetsDB'); 
// GET all sweets
router.get('/', async (req, res) => {
  try {
    const sweets = await Sweets.find();

    const sweetsWithImage = sweets.map((sweet) => ({
      sweetId: sweet.sweetId,
      name: sweet.name,
      price: sweet.price,
      quantity: sweet.quantity,
      category: sweet.category,
      description: sweet.description,
      isAvailable: sweet.quantity > 0,
      image: sweet.image?.data       //for loading image from multer
        ? `data:${sweet.image.contentType};base64,${sweet.image.data.toString('base64')}`
        : null,
    }));

    console.log("Fetched sweets from DB:", sweets);
    res.status(200).json(sweetsWithImage);
  } catch (error) {
    console.error('Error fetching sweets:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Search route
router.get('/search', async (req, res) => {
  const { name, category, minPrice, maxPrice } = req.query;

  let query = {};
  if (name) query.name = { $regex: name, $options: 'i' };
  if (category) query.category = { $regex: category, $options: 'i' };
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = parseFloat(minPrice);
    if (maxPrice) query.price.$lte = parseFloat(maxPrice);
  }

  console.log("Search query:", query);  //to check the backend working

  try {
    const sweets = await Sweets.find(query);

    const sweetsWithImage = sweets.map((sweet) => ({
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
    }));

    res.status(200).json(sweetsWithImage);
  } catch (err) {
    console.error('Search error:', err); // understand if error occurs
    res.status(500).json({ error: 'Search failed' });
  }
});


module.exports = router;



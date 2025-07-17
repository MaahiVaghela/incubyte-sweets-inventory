const express = require('express');
const router = express.Router();
const Sweets = require('../models/sweetsDB');

// GET /sweet/:id
router.get('/:id', async (req, res) => {
  try {
    const sweet = await Sweets.findOne({ sweetId: req.params.id });

    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });

    const sweetWithImage = {
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

    res.status(200).json(sweetWithImage);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sweet' });
  }
});

// POST /sweet/:id/purchase
router.post('/:id/purchase', async (req, res) => {
  const sweetId = req.params.id;
  const { purchaseQty } = req.body;

  try {
    const sweet = await Sweets.findOne({ sweetId });

    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });

    if (purchaseQty > sweet.quantity) {
      return res.status(400).json({ message: `Only ${sweet.quantity} left in stock.` });
    }

    sweet.quantity -= purchaseQty;
    await sweet.save();

    res.status(200).json({ message: 'Purchase successful', remaining: sweet.quantity });
  } catch (error) {
    res.status(500).json({ message: 'Purchase failed' });
  }
});

module.exports = router;

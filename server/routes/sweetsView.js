// const express = require('express');
// const router = express.Router();
// const Sweets = require('../models/sweetsDB');
// const multer = require('multer');

// // Multer setup
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
// // GET /sweet/:id
// router.get('/:id', async (req, res) => {
//   try {
//     const sweet = await Sweets.findOne({ sweetId: req.params.id });

//     if (!sweet) return res.status(404).json({ message: 'Sweet not found' });

//     const sweetWithImage = {
//       sweetId: sweet.sweetId,
//       name: sweet.name,
//       price: sweet.price,
//       quantity: sweet.quantity,
//       category: sweet.category,
//       description: sweet.description,
//       isAvailable: sweet.quantity > 0,
//       image: sweet.image?.data
//         ? `data:${sweet.image.contentType};base64,${sweet.image.data.toString('base64')}`
//         : null,
//     };

//     res.status(200).json(sweetWithImage);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching sweet' });
//   }
// });

// // POST /sweet/:id/purchase
// router.post('/:id/purchase', async (req, res) => {
//   const sweetId = req.params.id;
//   const { purchaseQty } = req.body;

//   try {
//     const sweet = await Sweets.findOne({ sweetId });

//     if (!sweet) return res.status(404).json({ message: 'Sweet not found' });

//     if (purchaseQty > sweet.quantity) {
//       return res.status(400).json({ message: `Only ${sweet.quantity} left in stock.` });
//     }

//     sweet.quantity -= purchaseQty;
//     await sweet.save();

//     res.status(200).json({ message: 'Purchase successful', remaining: sweet.quantity });
//   } catch (error) {
//     res.status(500).json({ message: 'Purchase failed' });
//   }
// });

// // DELETE /sweet/:id
// router.delete('/:id', async (req, res) => {
//   try {
    
//     const result = await Sweets.deleteOne({ sweetId: req.params.id });

//     if (result.deletedCount === 0) {
//       return res.status(404).json({ message: 'Sweet not found' });
//     }

//     res.status(200).json({ message: 'Sweet deleted successfully' });
//   } catch (error) {
//     console.error('Delete Error:', error);
//     res.status(500).json({ message: 'Error deleting sweet' });
//   }
// });



// // PUT /sweet/:id
// router.put('/:id', upload.single('image'), async (req, res) => {
//   try {
//     const sweet = await Sweets.findOne({ sweetId: req.params.id });

//     if (!sweet) {
//       return res.status(404).json({ message: 'Sweet not found' });
//     }

//     const { name, price, category, quantity, description } = req.body;

//     sweet.name = name || sweet.name;
//     sweet.price = price || sweet.price;
//     sweet.category = category || sweet.category;
//     sweet.quantity = quantity || sweet.quantity;
//     sweet.description = description || sweet.description;

//     if (req.file) {
//       sweet.image = {
//         data: req.file.buffer,
//         contentType: req.file.mimetype,
//       };
//     }

//     await sweet.save();

//     res.status(200).json({ message: 'Sweet updated successfully' });
//   } catch (error) {
//     console.error('Update Error:', error);
//     res.status(500).json({ message: 'Error updating sweet' });
//   }
// });


// module.exports = router;


const express = require('express');
const router = express.Router();
const Sweets = require('../models/sweetsDB');
const multer = require('multer');

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ✅ GET /sweet/:id
router.get('/:id', async (req, res) => {
  const sweetId = parseInt(req.params.id, 10);
  if (isNaN(sweetId)) return res.status(400).json({ message: 'Invalid sweet ID' });

  try {
    const sweet = await Sweets.findOne({ sweetId });

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

// ✅ POST /sweet/:id/purchase
router.post('/:id/purchase', async (req, res) => {
  const sweetId = parseInt(req.params.id, 10);
  if (isNaN(sweetId)) return res.status(400).json({ message: 'Invalid sweet ID' });

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

// ✅ DELETE /sweet/:id
router.delete('/:id', async (req, res) => {
  try {
   const sweetId = Number(req.params.id);

if (isNaN(sweetId)) {
  return res.status(400).json({ message: 'Invalid sweetId' });
}
// Ensure it's number
    console.log("Attempting to delete sweetId:", sweetId);

    const result = await Sweets.deleteOne({ sweetId });
    console.log("Delete result:", result);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Sweet not found' });
    }

    res.status(200).json({ message: 'Sweet deleted successfully' });
  } catch (error) {
    console.error('Delete Error:', error);
    res.status(500).json({ message: 'Error deleting sweet' });
  }
});

// ✅ PUT /sweet/:id

router.put('/:id', upload.single('image'), async (req, res) => {
  const sweetId = parseInt(req.params.id, 10);
  if (isNaN(sweetId)) return res.status(400).json({ message: 'Invalid sweet ID' });

  try {
    const sweet = await Sweets.findOne({ sweetId });

    if (!sweet) {
      return res.status(404).json({ message: 'Sweet not found' });
    }

    const { name, price, category, quantity, description } = req.body;

    sweet.name = name || sweet.name;
    sweet.price = price || sweet.price;
    sweet.category = category || sweet.category;
    sweet.quantity = quantity || sweet.quantity;
    sweet.description = description || sweet.description;

    if (req.file) {
      sweet.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    await sweet.save();

    res.status(200).json({ message: 'Sweet updated successfully' });
  } catch (error) {
    console.error('Update Error:', error);
    res.status(500).json({ message: 'Error updating sweet' });
  }
});

module.exports = router;

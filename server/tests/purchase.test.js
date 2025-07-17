
const request = require('supertest');
const app = require('../app');
const Sweets = require('../models/sweetsDB');
const mongoose = require('mongoose');

beforeAll(async () => {
  await Sweets.deleteMany({});

  // Create with a safe initial quantity for all tests to pass
  await Sweets.create({
    sweetId: 1002,
    name: "Rasgulla",
    price: 250,
    quantity: 10, 
    category: "Milk-based",
    description: "Soft & juicy",
    image: {
      data: Buffer.from("sample-image-data"),
      contentType: "jpg"
    }
  });
});

afterAll(async () => {
  await Sweets.deleteMany({});
  await mongoose.connection.close();
});

describe('POST /sweet/:id/purchase', () => {
 test('should purchase sweet and reduce quantity', async () => {
  const res = await request(server)
    .post(`/sweet/${sweetId}/purchase`)
    .send({ purchaseQty: 2 });

  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Purchase successful');
  expect(res.body.remaining).toBe(3); // if quantity was 5 before
});
 test('❌ should not purchase sweet if quantity is more than available', async () => {
    const res = await request(app)
      .post('/sweet/1002/purchase')
      .send({ purchaseQty: 999 });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Only 7 left in stock.');
  });

  test('✅ image should remain intact after purchase', async () => {
    const sweet = await Sweets.findOne({ sweetId: 1002 });

    expect(sweet.image).toBeDefined();
    expect(sweet.image.data).toBeInstanceOf(Buffer);
    expect(sweet.image.contentType).toBe("jpg");
  });
   test('✅ should purchase sweet when quantity is sufficient', async () => {
    const res = await request(app)
      .post('/sweet/1002/purchase')
      .send({ purchaseQty: 3 });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Purchase successful');

    const updatedSweet = await Sweets.findOne({ sweetId: 1002 });
    expect(updatedSweet.quantity).toBe(7);
  });

});

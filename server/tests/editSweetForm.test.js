// const request = require('supertest');
// const app = require('../app');
// const mongoose = require('mongoose');
// const Sweet = require('../models/sweetsDB');

// describe('PUT /sweet/:sweetId - Edit a sweet', () => {
//   let server;
//   let sweetId;

//   beforeAll(async () => {
//     server = app.listen(4001);
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });

//     const sweet = await Sweet.create({
//       sweetId: 1010,
//       name: 'Cake',
//       quantity: 5,
//       price: 180
//     });

//     sweetId = sweet.sweetId;
//   });

//   afterAll(async () => {
//     await Sweet.deleteMany({});
//     await mongoose.connection.close();
//     await server.close();
//   });

//   test('should return success message after update', async () => {
//     const res = await request(server)
//       .put(`/sweet/${sweetId}`)
//       .send({
//         name: 'Updated Sweet',
//         quantity: 10,
//         price: 200
//       });

//     expect(res.statusCode).toBe(200);
//     expect(res.body).toEqual({ message: 'Sweet updated successfully' });
//   });
// });
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Sweet = require('../models/sweetsDB');

describe('PUT /sweet/:sweetId - Edit a sweet', () => {
  let server;
  let sweetId;

  beforeAll(async () => {
    server = app.listen(4001);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Sweet.deleteMany({});
    const sweet = await Sweet.create({
      sweetId: 1008,
      name: 'Cake',
      quantity: 5,
      price: 180,
    });

    sweetId = sweet.sweetId;
  });

  afterAll(async () => {
    await Sweet.deleteMany({});
    await mongoose.connection.close();
    await server.close();
  });

  test('✅ should return success message after update', async () => {
    const res = await request(server)
      .put(`/sweet/${sweetId}`)
      .send({
        name: 'Updated Cake',
        quantity: 15,
        price: 250,
        category: 'Bakery',
        description: 'A deliciously updated sweet!',
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Sweet updated successfully' });

    const updatedSweet = await Sweet.findOne({ sweetId });
    expect(updatedSweet.name).toBe('Updated Cake');
    expect(updatedSweet.quantity).toBe(15);
    expect(updatedSweet.price).toBe(250);
    expect(updatedSweet.category).toBe('Bakery');
    expect(updatedSweet.description).toBe('A deliciously updated sweet!');
  });

  test('✅ should return 404 if sweetId not found', async () => {
    const res = await request(server)
      .put('/sweet/9999') // ID that doesn't exist
      .send({
        name: 'Non-Existent',
        quantity: 10,
        price: 100,
      });

    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error', 'Sweet not found');
  });

  test('✅ should return 400 if required fields are missing', async () => {
    const res = await request(server)
      .put(`/sweet/${sweetId}`)
      .send({}); // No fields

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});

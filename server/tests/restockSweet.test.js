// // const request = require('supertest');
// // const app = require('../app'); // Your Express app
// // const mongoose = require('mongoose');
// // const Sweet = require('../models/sweetsDB');

// // describe('PATCH /sweet/:id/restock - Restock a sweet', () => {
// //   let server;
// //   let sweetId;

// //   beforeAll(async () => {
// //     server = app.listen(4002); // run on different port to avoid conflict
// //     await mongoose.connect(process.env.MONGO_URI, {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true
// //     });

// //     // Create a sweet to restock
// //     const sweet = await Sweet.create({
// //       sweetId: 1010,
// //       name: 'Test Sweet',
// //       quantity: 5,
// //       price: 100
// //     });

// //     sweetId = sweet.sweetId;
// //   });

// //   afterAll(async () => {
// //     await Sweet.deleteMany({});
// //     await mongoose.connection.close();
// //     await server.close();
// //   });

// //   test('should successfully restock the sweet', async () => {
// //     const res = await request(server)
// //       .patch(`/sweet/${sweetId}/restock`)
// //       .send({ quantityToAdd: 10 });

// //     expect(res.statusCode).toBe(200);
// //     expect(res.body).toHaveProperty('message', 'Sweet restocked successfully');

// //     const updatedSweet = await Sweet.findOne({ sweetId });
// //     expect(updatedSweet.quantity).toBe(15); 
// //   });

// //   test('should return 404 for non-existing sweetId', async () => {
// //     const res = await request(server)
// //       .patch(`/sweet/9999/restock`)
// //       .send({ quantityToAdd: 5 });

// //     expect(res.statusCode).toBe(404);
// //     expect(res.body).toHaveProperty('error', 'Sweet not found');
// //   });

 
// // });
const request = require('supertest');
const app = require('../app'); // Your Express app
const mongoose = require('mongoose');
const Sweet = require('../models/sweetsDB');

describe('PATCH /sweet/:id/restock - Restock a sweet', () => {
  let server;
  let sweetId;

  beforeAll(async () => {
    server = app.listen(4002); // run on different port to avoid conflict
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Create a sweet to restock
    const sweet = await Sweet.create({
      sweetId: 1010,
      name: 'Test Sweet',
      quantity: 5,
      price: 100
    });

    sweetId = sweet.sweetId;
  });

  afterAll(async () => {
    await Sweet.deleteMany({});
    await mongoose.connection.close();
    await server.close();
  });

//   test('should successfully restock the sweet', async () => {
//     const res = await request(server)
//       .patch(`/sweet/${sweetId}/restock`)
//       .send({ quantityToAdd: 10 });

//     expect(res.statusCode).toBe(404);
//     expect(res.body).toHaveProperty('message', 'Sweet restocked successfully');

//     const updatedSweet = await Sweet.findOne({ sweetId });
//     expect(updatedSweet.quantity).toBe(15); 
//   });

//   test('should return 404 for non-existing sweetId', async () => {
//     const res = await request(server)
//       .patch(`/sweet/9999/restock`)
//       .send({ quantityToAdd: 5 });

//     expect(res.statusCode).toBe(404);
//     expect(res.body).toHaveProperty('error', 'Sweet not found');
//   });

 
// });
test('should restock sweet quantity', async () => {
  const res = await request(server)
    .patch(`/sweet/${sweetId}/restock`)
    .send({ quantityToAdd: 5 });

  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Sweet restocked successfully');
  expect(res.body.sweet.quantity).toBe(10); // if initial quantity was 5
});
});
